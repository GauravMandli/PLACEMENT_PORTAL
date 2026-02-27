from django.contrib import admin
from .models import CompanyProfile
# Register your models here.

@admin.register(CompanyProfile)
class CompanyProfileAdmin(admin.ModelAdmin):
    list_display = ("company_name", "company_email", "phone", "is_approved", "created_at")
    list_filter = ("is_approved", "created_at")
    search_fields = ("company_name", "company_email")
    ordering = ("is_approved", "-created_at")
    actions = ["approve_companies", "reject_companies"]

    def approve_companies(self, request, queryset):
        updated = queryset.update(is_approved=True)
        self.message_user(request, f"{updated} companies approved successfully.")

    def reject_companies(self, request, queryset):
        updated = queryset.update(is_approved=False)
        self.message_user(request, f"{updated} companies marked as not approved.")