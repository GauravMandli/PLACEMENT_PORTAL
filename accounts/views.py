from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login,logout
from django.contrib import messages
from companies.models import CompanyProfile
from students.models import StudentProfile
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from accounts.models import User



# Create your views here.

User = get_user_model()


# ==================================
# STUDENT LOGIN
# ==================================
def student_login(request):
    if request.method == "POST":
        enroll_number = request.POST.get("enroll_number")
        password = request.POST.get("password")


        user = authenticate(request, username=enroll_number, password=password)
        
        print("Enroll Entered:", enroll_number)
        print("Password Entered:", password)
        print("User:", user)

        if user:
            print("Role:", user.role)
        # Invalid credentials
        if user is None:
            messages.error(request, "Invalid enrollment number or password.")
            return redirect("student_login")

        # Role check
        if user.role != "student":
            messages.error(request, "Access denied. Not a student account.")
            return redirect("student_login")

        # Profile check
        try:
            StudentProfile.objects.get(user=user)
        except StudentProfile.DoesNotExist:
            messages.error(request, "Student profile not found.")
            return redirect("student_login")

        login(request, user)
        messages.success(request, "Login successful.")
        return redirect("student_dashboard")

    return render(request, "student/pages/student_login.html")


# ==================================
# COMPANY LOGIN
# ==================================
def company_login(request):
    if request.method == "POST":
        company_email = request.POST.get("email")
        password = request.POST.get("password")

        user = authenticate(request, username=company_email, password=password)

        # Invalid credentials
        if user is None:
            messages.error(request, "Invalid email or password.")
            return redirect("company_login")

        # Role check
        if user.role != "company":
            messages.error(request, "Access denied. Not a company account.")
            return redirect("company_login")

        # Profile check
        try:
            profile = CompanyProfile.objects.get(user=user)
        except CompanyProfile.DoesNotExist:
            messages.error(request, "Company profile not found.")
            return redirect("company_login")

        # Approval check
        if not profile.is_approved:
            messages.error(request, "Your account is not approved yet.")
            return redirect("company_login")

        login(request, user)
        messages.success(request, "Login successful.")
        return redirect("company_dashboard")

    return render(request, "company/pages/company_login.html")


# ==================================
# ADMIN LOGIN
# ==================================
def pc_login(request):
    if request.method == "POST":
        username_or_email = request.POST.get("username")
        password = request.POST.get("password")

        # first try username login
        user = authenticate(request, username=username_or_email, password=password)

        # if failed,try email login
        if user is None:
            try:
                user_obj = User.objects.get(email__iexact=username_or_email)
                user = authenticate(request, username=user_obj.username, password=password)
            except User.DoesNotExist:
                user = None
        if not user.is_active:
            messages.error(request, "Account is disabled.")
            return redirect("pc_login")

        if user is None:
            messages.error(request, "Invalid username/email or password.")
            return redirect("pc_login")
        
        if user.role != "admin":
            messages.error(request, "Access denied. Not an admin account.")
            return redirect("pc_login")
        
        login(request,user)
        messages.success(request,"Admin login successful.")
        return redirect("placement_cell:pc_dashboard")
    
    return render(request,"placement_cell/pages/pc_login.html")


# ==================================
# LOGOUT
# ==================================
def logout_view(request):
    logout(request)
    messages.success(request, "Logged out successfully.")
    return redirect("student_login")




        # if user is not None and user.role == "student":
        #     login(request,user)
        #     return redirect("student_dashboard")
        # else:
        #     messages.error(request,"Invalid credentials")

        