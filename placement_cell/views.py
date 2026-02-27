from django.shortcuts import render
from django.shortcuts import render
from django.contrib.auth.decorators import login_required #when user login then function use
from django.http import HttpResponseForbidden #unauthorized hoy to access block mate
from students.models import StudentProfile
from companies.models import CompanyProfile
from jobs.models import JobRequirement
from accounts.decorators import admin_required #only admin access
from django.shortcuts import get_object_or_404, redirect #db mathi object na male to 404 error
from django.views.decorators.http import require_POST #post req thi j call thay get thi direct kare to work na akre
from django.contrib import messages #message mate
from django.db import transaction #db operation and koi eroor aave to rollbace tahy and safe 


# Create your views here.
@login_required
@admin_required
def pc_dashboard(request):
    if request.user.role != "admin":
        return HttpResponseForbidden("Unauthorized Access")
    
    context ={
        "active_page" : "dashboard",
        "page_title" : "Dashboard",
    }
    
    return render(request, "placement_cell/pages/pc_dashboard.html",context)

#view students
@login_required
@admin_required
def view_students(request):
    students = StudentProfile.objects.select_related("user").filter(user__role="student")
    context ={
        "active_page" : "view_students",
        "page_title" : "View Students",
         "students": students,
    }
    return render(request, "placement_cell/pages/view_students.html",context)


#view company
@login_required
@admin_required
def view_company(request):
    context ={
        "active_page" : "view_company",
        "page_title" : "View Companies",
        
    }
    return render(request, "placement_cell/pages/view_company.html",context)

#approve companies
@login_required
@admin_required
def approve_company(request):
    context ={
        "active_page" : "approve_company",
        "page_title" : "Approve Companies",
    }
    return render(request, "placement_cell/pages/approve_company.html",context)

#view requirements
@login_required
@admin_required
def view_requirements(request):
    context ={
        "active_page" : "view_requirements",
        "page_title" : "View Requirements",
    }
    return render(request, "placement_cell/pages/view_requirements.html",context)

#shortlisted students
@login_required
@admin_required
def shortlisted_Students(request):
    context ={
        "active_page" : "shortlisted_students",
        "page_title" : "Shortlisted Students",
    }
    return render(request, "placement_cell/pages/shortlisted_students.html",context)

#selected students
@login_required
@admin_required
def selected_students(request):
    context ={
        "active_page" : "selected_students",
        "page_title" : "Selected Students",
    }
    return render(request, "placement_cell/pages/selected_students.html",context)

#view contacts
@login_required
@admin_required
def view_contacts(request):
    context ={
        "active_page" : "view_contacts",
        "page_title" : "View Contacts",
    }
    return render(request, "placement_cell/pages/view_contacts.html",context)



#delete student 
@require_POST
@login_required
@admin_required
def delete_student(request, pk):
    student = get_object_or_404(
        StudentProfile.objects.select_related("user"),
        pk=pk,
        user__role="student"
    )

    try:
        with transaction.atomic():
            student.user.delete()  # Cascade will remove StudentProfile

        messages.success(request, "Student deleted successfully.")

    except Exception:
        messages.error(request, "Something went wrong while deleting the student.")

    return redirect("placement_cell:view_students")