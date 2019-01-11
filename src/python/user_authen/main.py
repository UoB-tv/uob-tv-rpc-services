from gunicorn.app.wsgiapp import WSGIApplication
from user_authen.app.app import app, run_app


import os


PORT = 8080
def require_env_var(name, optional=False):
    env_var = os.environ.get(name, None)
    if env_var is None and not optional:
        logger.error("%s variable must be set.", name)
        exit(-1)

ENVIRONMENT=require_env_var("ENVIRONMENT", optional=True)
debug = ENVIRONMENT == "development"


def run_wsgi_app(app):
    from gunicorn.app.wsgiapp import WSGIApplication
    class GunicornApplication(WSGIApplication):
        def init(self, parser, opts, args):
            self.options = opts
            self.args = args
            #super(GunicornApplication, self).__init__(parser, opts, args)
            return {
                'bind': '0.0.0.0:{}'.format(PORT),
                'workers': 2,
                "accesslog": "-",
                "errorlog": "-",
                "loglevel": "debug",
                "timeout": 20,
            }
        def load(self):
            return app
    GunicornApplication().run()

if __name__ == "__main__":
    if debug:
        run_app(app)
    else:
        run_wsgi_app(app)