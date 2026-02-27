
(function () {
    // Sample data
    const companyDetails = {
        'Tech Corp': {
            name: 'Tech Corp',
            industry: 'Information Technology',
            location: 'Bangalore, Karnataka',
            email: 'hr@techcorp.com',
            phone: '+91 80 1234 5678',
            website: 'www.techcorp.com',
            description: 'Leading IT services company specializing in software development and cloud solutions.',
            hrName: 'Sarah Johnson',
            founded: '2010',
            employees: '500+'
        },
        'Innovate Ltd': {
            name: 'Innovate Ltd',
            industry: 'Software Development',
            location: 'Mumbai, Maharashtra',
            email: 'careers@innovate.com',
            phone: '+91 22 2345 6789',
            website: 'www.innovate.com',
            description: 'Innovative software solutions provider focused on cutting-edge technology.',
            hrName: 'Rajesh Kumar',
            founded: '2015',
            employees: '200+'
        },
        'Cloud Solutions': {
            name: 'Cloud Solutions',
            industry: 'Cloud Services',
            location: 'Hyderabad, Telangana',
            email: 'hr@cloudsolutions.com',
            phone: '+91 40 3456 7890',
            website: 'www.cloudsolutions.com',
            description: 'Premier cloud infrastructure and services provider.',
            hrName: 'Priya Sharma',
            founded: '2012',
            employees: '300+'
        },
        'Digital Innovations': {
            name: 'Digital Innovations',
            industry: 'Digital Marketing',
            location: 'Pune, Maharashtra',
            email: 'contact@digitalinnovations.com',
            phone: '+91 20 4567 8901',
            website: 'www.digitalinnovations.com',
            description: 'Digital transformation and marketing solutions company.',
            hrName: 'Amit Verma',
            founded: '2018',
            employees: '150+'
        }
    };

    const appliedStudentsAdminData = {
        1: [
            { name: 'John Doe', branch: 'CS', cgpa: '8.5', resume: 'john_doe_resume.pdf', appliedDate: '16 Jan 2024' },
            { name: 'Jane Smith', branch: 'ECE', cgpa: '8.8', resume: 'jane_smith_resume.pdf', appliedDate: '17 Jan 2024' }
        ],
        2: [
            { name: 'Sarah Williams', branch: 'CS', cgpa: '8.9', resume: 'sarah_williams_resume.pdf', appliedDate: '21 Jan 2024' }
        ],
        3: [
            { name: 'Mike Johnson', branch: 'ME', cgpa: '8.2', resume: 'mike_johnson_resume.pdf', appliedDate: '19 Jan 2024' }
        ],
        4: [
            { name: 'Rajesh Kumar', branch: 'IT', cgpa: '8.3', resume: 'rajesh_kumar_resume.pdf', appliedDate: '22 Jan 2024' }
        ]
    };

    // var pageTitles = {
    //     'page-home': 'Home',
    //     'page-view-students': 'View Students',
    //     'page-view-companies': 'View Companies',
    //     'page-view-requirements': 'View Requirements',
    //     'page-approve-companies': 'Approve Companies',
    //     'page-view-contacts': 'View Contacts'
    // };

    // function showPage(pageId) {
    //     document.querySelectorAll('.dashboard-page').forEach(function(el) {
    //         el.classList.remove('active');
    //     });
    //     var page = document.getElementById(pageId);
    //     if (page) {
    //         page.classList.add('active');
    //     }
    //     var titleEl = document.getElementById('page-title');
    //     if (titleEl) {
    //         titleEl.textContent = pageTitles[pageId] || 'Home';
    //     }
    //     document.querySelectorAll('.sidebar-menu .nav-link-dashboard').forEach(function(link) {
    //         link.classList.remove('active');
    //         if (link.getAttribute('data-page') === pageId) {
    //             link.classList.add('active');
    //         }
    //     });
    // }

    // // Sidebar navigation
    // document.querySelectorAll('.nav-link-dashboard').forEach(function(link) {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         var pageId = this.getAttribute('data-page');
    //         if (pageId) {
    //             showPage(pageId);
    //         }
    //     });
    // });

    // View Company Details
    document.querySelectorAll('.view-company-details').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var companyName = this.getAttribute('data-company');
            var details = companyDetails[companyName];
            if (details) {
                var content = `
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <strong>Company Name:</strong> ${details.name}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Industry:</strong> ${details.industry}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Location:</strong> ${details.location}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Founded:</strong> ${details.founded}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Email:</strong> ${details.email}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Phone:</strong> ${details.phone}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Website:</strong> <a href="https://${details.website}" target="_blank">${details.website}</a>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>HR Name:</strong> ${details.hrName}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <strong>Employees:</strong> ${details.employees}
                                </div>
                                <div class="col-12 mb-3">
                                    <strong>Description:</strong><br>
                                    <p class="text-muted">${details.description}</p>
                                </div>
                            </div>
                        `;
                document.getElementById('companyDetailsContent').innerHTML = content;
                var modal = new bootstrap.Modal(document.getElementById('companyDetailsModal'));
                modal.show();
            }
        });
    });

    // View Applied Students (Admin)
    document.querySelectorAll('.view-applied-students-admin').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var jobId = this.getAttribute('data-job-id');
            var jobTitle = this.getAttribute('data-job-title');
            var students = appliedStudentsAdminData[jobId] || [];

            document.getElementById('admin-modal-job-title').textContent = jobTitle;
            var tbody = document.getElementById('admin-applied-students-table-body');
            tbody.innerHTML = '';

            if (students.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No applications received yet.</td></tr>';
            } else {
                students.forEach(function (student) {
                    var row = document.createElement('tr');
                    row.innerHTML = `
                                <td>${student.name}</td>
                                <td>${student.branch}</td>
                                <td>${student.cgpa}</td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-outline-primary" onclick="downloadResume('${student.resume}'); return false;">
                                        <i class="fas fa-download me-1"></i>Download
                                    </a>
                                </td>
                                <td>${student.appliedDate}</td>
                            `;
                    tbody.appendChild(row);
                });
            }

            var modal = new bootstrap.Modal(document.getElementById('appliedStudentsAdminModal'));
            modal.show();
        });
    });

    // Approve/Reject Companies
    document.querySelectorAll('.approve-company').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var companyId = this.getAttribute('data-company-id');
            var companyName = this.getAttribute('data-company-name');
            document.getElementById('confirmApproveCompanyName').textContent = companyName;
            document.getElementById('confirmApproveBtn').setAttribute('data-company-id', companyId);
            document.getElementById('confirmApproveBtn').setAttribute('data-company-name', companyName);
            var modal = new bootstrap.Modal(document.getElementById('approveCompanyModal'));
            modal.show();
        });
    });

    document.querySelectorAll('.reject-company').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var companyId = this.getAttribute('data-company-id');
            var companyName = this.getAttribute('data-company-name');
            document.getElementById('confirmRejectCompanyName').textContent = companyName;
            document.getElementById('confirmRejectCompanyBtn').setAttribute('data-company-id', companyId);
            document.getElementById('confirmRejectCompanyBtn').setAttribute('data-company-name', companyName);
            var modal = new bootstrap.Modal(document.getElementById('rejectCompanyModal'));
            modal.show();
        });
    });

    // Confirm Approve Company
    document.getElementById('confirmApproveBtn').addEventListener('click', function () {
        var companyId = this.getAttribute('data-company-id');
        var companyName = this.getAttribute('data-company-name');
        var row = document.querySelector('[data-company-id="' + companyId + '"]').closest('tr');
        row.remove();
        updatePendingCount();
        if (typeof showToast === 'function') {
            showToast(companyName + ' approved successfully.', 'success');
        } else {
            alert(companyName + ' approved successfully.');
        }
        bootstrap.Modal.getInstance(document.getElementById('approveCompanyModal')).hide();
    });

    // Confirm Reject Company
    document.getElementById('confirmRejectCompanyBtn').addEventListener('click', function () {
        var companyId = this.getAttribute('data-company-id');
        var companyName = this.getAttribute('data-company-name');
        var row = document.querySelector('[data-company-id="' + companyId + '"]').closest('tr');
        row.remove();
        updatePendingCount();
        if (typeof showToast === 'function') {
            showToast(companyName + ' rejected.', 'danger');
        } else {
            alert(companyName + ' rejected.');
        }
        bootstrap.Modal.getInstance(document.getElementById('rejectCompanyModal')).hide();
    });

    function updatePendingCount() {
        var pendingRows = document.querySelectorAll('#page-approve-companies tbody tr');
        var count = pendingRows.length;
        var badge = document.getElementById('pending-count');
        if (badge) {
            badge.textContent = count;
            if (count === 0) {
                badge.classList.add('d-none');
            } else {
                badge.classList.remove('d-none');
            }
        }
    }

    // View Requirement Details
    document.querySelectorAll('.view-requirement-details').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var jobTitle = this.getAttribute('data-job-title');
            var company = this.getAttribute('data-company');
            var jobId = this.getAttribute('data-job-id');

            var requirementDetails = {
                1: { title: 'Software Engineer', company: 'Tech Corp', type: 'Full Time', salary: '8-12 LPA', location: 'Bangalore', skills: 'Java, Spring, SQL', eligibility: 'CGPA ≥ 7.5', posted: '15 Jan 2024', applications: 15 },
                2: { title: 'Frontend Developer', company: 'Innovate Ltd', type: 'Full Time', salary: '6-10 LPA', location: 'Mumbai', skills: 'React, JavaScript, HTML/CSS', eligibility: 'CGPA ≥ 7.0', posted: '20 Jan 2024', applications: 8 },
                3: { title: 'Backend Developer', company: 'Cloud Solutions', type: 'Full Time', salary: '7-11 LPA', location: 'Hyderabad', skills: 'Node.js, MongoDB, Express', eligibility: 'CGPA ≥ 7.0', posted: '18 Jan 2024', applications: 12 },
                4: { title: 'Python Developer', company: 'Data Labs', type: 'Full Time', salary: '9-13 LPA', location: 'Pune', skills: 'Python, Django, SQL', eligibility: 'CGPA ≥ 7.5', posted: '22 Jan 2024', applications: 10 }
            };

            var details = requirementDetails[jobId] || { title: jobTitle, company: company, type: 'Full Time', salary: 'Competitive', location: 'Multiple', skills: 'Various', eligibility: 'As per requirements', posted: 'Recent', applications: 0 };

            document.getElementById('requirementDetailsTitle').textContent = details.title;
            document.getElementById('requirementDetailsCompany').textContent = details.company;
            document.getElementById('requirementDetailsType').textContent = details.type;
            document.getElementById('requirementDetailsSalary').textContent = details.salary;
            document.getElementById('requirementDetailsLocation').textContent = details.location;
            document.getElementById('requirementDetailsSkills').textContent = details.skills;
            document.getElementById('requirementDetailsEligibility').textContent = details.eligibility;
            document.getElementById('requirementDetailsPosted').textContent = details.posted;
            document.getElementById('requirementDetailsApplications').textContent = details.applications;

            var modal = new bootstrap.Modal(document.getElementById('requirementDetailsModal'));
            modal.show();
        });
    });
    // ===============================
    // View Student Profile (Admin)
    // ===============================

    document.querySelectorAll(".view-studentdetails-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {

            // Basic Info
            document.getElementById("profileStudentName").innerText =
                this.dataset.name || "N/A";

            document.getElementById("profileStudentEmail").innerText =
                this.dataset.email || "N/A";

            document.getElementById("profileStudentPhone").innerText =
                this.dataset.phone || "N/A";

            document.getElementById("profileStudentCgpa").innerText =
                this.dataset.cgpa || "N/A";

            document.getElementById("profileStudentBranch").innerText =
                this.dataset.branch || "N/A";

            document.getElementById("profileStudentSkills").innerText =
                this.dataset.skills || "N/A";

            // Photo
            var photo = this.dataset.photo;
            var photoEl = document.getElementById("profileStudentPhoto");

            if (photo) {
                photoEl.src = photo;
                photoEl.style.display = "block";
            } else {
                photoEl.style.display = "none";
            }

            // LinkedIn
            var linkedin = this.dataset.linkedin;
            var linkedinEl = document.getElementById("profileStudentLinkedin");

            if (linkedin) {
                linkedinEl.href = linkedin;
                linkedinEl.innerText = linkedin;
                linkedinEl.style.display = "inline";
            } else {
                linkedinEl.style.display = "none";
            }

            // GitHub
            var github = this.dataset.github;
            var githubEl = document.getElementById("profileStudentGithub");

            if (github) {
                githubEl.href = github;
                githubEl.innerText = github;
                githubEl.style.display = "inline";
            } else {
                githubEl.style.display = "none";
            }

            // Portfolio
            var portfolio = this.dataset.portfolio;
            var portfolioEl = document.getElementById("profileStudentPortfolio");

            if (portfolio) {
                portfolioEl.href = portfolio;
                portfolioEl.innerText = portfolio;
                portfolioEl.style.display = "inline";
            } else {
                portfolioEl.style.display = "none";
            }

            // Resume
            var resume = this.dataset.resume;
            var resumeEl = document.getElementById("profileStudentResumeLink");

            if (resume) {
                resumeEl.href = resume;
                resumeEl.style.display = "inline-block";
            } else {
                resumeEl.style.display = "none";
            }


        });
    });
    // ===============================
    // delete Student Profile (Admin)
    // ===============================
    document.querySelectorAll(".delete-student").forEach(function (btn) {
        btn.addEventListener("click", function () {

            var studentId = this.dataset.studentId;
            var studentName = this.dataset.studentName;

            if (confirm("Delete " + studentName + " ?")) {
                window.location.href = "/placement_cell/delete-student/" + studentId + "/";
            }

        });
    });
    // Resume functions
    window.viewResume = function (filename) {
        alert('Opening resume: ' + filename + '\n\n(In a real application, this would open the PDF in a new tab or viewer.)');
    };

    window.downloadResume = function (filename) {
        alert('Downloading resume: ' + filename + '\n\n(In a real application, this would trigger a file download.)');
    };
})();
