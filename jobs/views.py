from django.shortcuts import render
from .models import JobRequirement

# Create your views here.


def job_list(request):
    jobs = JobRequirement.objects.filter(status='active')
    return render(request, 'student/job_list.html', {'jobs': jobs})