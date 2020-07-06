from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import api.routing

# application = URLRouter(
#             api.routing.websocket_urlpatterns,
#         )

application = ProtocolTypeRouter({
    "websocket": api.routing.websocket_urlpatterns,
}) 



# ProtocolTypeRouter({
    # (http->django views is added by default)
    # 
        # 
    # })