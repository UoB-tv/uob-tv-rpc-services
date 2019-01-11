package tv.uob.graphql.api.server;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import javax.inject.Singleton;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Key;

@Singleton
public class JwtAuthenticationFilter implements Filter {

    private Key jwtAuthSecretKey;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String secret = System.getenv("API_AUTH_JWT_SECRET");
        if (secret == null) {
            throw new UnsupportedOperationException("API_AUTH_JWT_SECRET environment variable is missing");
        }
        jwtAuthSecretKey = Keys.hmacShaKeyFor(secret.getBytes());
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (!(request instanceof HttpServletRequest)) {
            chain.doFilter(request, response);
        }

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        if (!httpRequest.getServletPath().startsWith("/graphql")) {
            chain.doFilter(request, response);
        }
        String authorizationHeader = httpRequest.getHeader("Authorization");

        if (authorizationHeader == null || authorizationHeader.isEmpty()) {
            authorizationHeader = httpRequest.getHeader("authorization");
        }
        if (authorizationHeader == null || authorizationHeader.isEmpty()) {
            forbidden(httpResponse, "Authorization header is missing.");
            return;
        }
        if (!authorizationHeader.startsWith("Bearer") && !authorizationHeader.startsWith("bearer")) {
            forbidden(httpResponse, "Bearer header is missing.");
            return;
        }
        try {
            if (!verifyToken(authorizationHeader.substring(7))) {
                forbidden(httpResponse, "failed to verify token.");
                return;
            }
            chain.doFilter(request, response);
        } catch (SignatureException | InvalidClaimException exception) {
            forbidden(httpResponse, exception.getMessage());
        }
    }

    private void forbidden(HttpServletResponse httpResponse, String message) {
        httpResponse.setStatus(403);
        httpResponse.setHeader("Content-Type", "text/html");

        try (PrintWriter writer = new PrintWriter(httpResponse.getOutputStream())) {
            writer.print(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Verify token is valid and
     *
     * @param token
     * @return
     */
    private boolean verifyToken(String token) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        Claims claims = Jwts.parser()
                .setAllowedClockSkewSeconds(30)
                .setSigningKey(jwtAuthSecretKey)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject().endsWith("bristol.ac.uk");
    }

    @Override
    public void destroy() {

    }
}
