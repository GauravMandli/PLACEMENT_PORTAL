from django.http import HttpResponseForbidden
from functools import wraps

def admin_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated and request.user.role == "admin":
            return view_func(request, *args, **kwargs)
        return HttpResponseForbidden("Unauthorized Access")
    return wrapper