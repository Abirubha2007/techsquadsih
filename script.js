import { createIcons, icons } from 'lucide';

// Data array containing the exact team members from the reference image
const teamMembers = [
    {
        name: "TharunKumar K",
        role: "Team Lead & Full Stack Developer",
        photoUrl: "/images/Tharunkumar.jpeg", 
        description: "Leading the project architecture and developing core academic task workflows, dashboards, and full-stack features.",
        linkedinUrl: "https://www.linkedin.com/in/tharunkumark4743/",
        githubUrl: "https://github.com/Tharun4743"
    },
    {
        name: "Subhasri L",
        role: "Frontend Developer",
        photoUrl: "/images/Subhasri.jpeg",
        description: "Building responsive dashboards and intuitive interfaces for students, faculty, coordinators, and administrators.",
        linkedinUrl: "https://www.linkedin.com/in/subhasri-l-725373392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        githubUrl: "https://github.com/Subhasriloganathan"
    },
    {
        name: "SanthoshKumar S",
        role: "Backend & Database Developer",
        photoUrl: "/images/SanthoshKumar.jpeg",
        description: "Developing APIs, PostgreSQL workflows, RBAC, task management, and multi-level verification systems.",
        linkedinUrl: "https://www.linkedin.com/in/santhoshkumar-s007/",
        githubUrl: "https://github.com/SanthoshkumarS2407"
    },
    {
        name: "RamKishore S M",
        role: "Coding Analytics Developer",
        photoUrl: "/images/RamKishore.jpeg",
        description: "Developing LeetCode and GitHub tracking, coding metrics, target monitoring, and automated defaulter analytics.",
        linkedinUrl: " https://www.linkedin.com/in/ramkishore-sm-919507314",
        githubUrl: "https://github.com/r076-Ram"
    },
    {
        name: "Elakkiyaa V",
        role: "QA & Reporting Engineer",
        photoUrl: "/images/Elakkiyaa V.jpeg",
        description: "Validating system workflows and developing reliable institutional reports, coding reports, and department analytics.",
        linkedinUrl: "https://www.linkedin.com/in/elakkiyaa-viswanathan-357356387/",
        githubUrl: "https://github.com/Elakkiyaa55197"
    },
    {
        name: "Abirubha P",
        role: "DevOps & Automation Engineer",
        photoUrl: "/images/Abirubha.jpeg",
        description: "Managing automated cloud synchronization, scheduled jobs, database backups, GitHub integrations, and deployment workflows.",
        linkedinUrl: "https://www.linkedin.com/in/abirubha-ponnusamy-42b511417/",
        githubUrl: "https://github.com/Abirubha2007"
    }
];

/**
 * Renders the team member cards into the DOM using the new layout structure
 */
function renderTeamCards() {
    const teamGrid = document.getElementById('team-grid');
    
    // Clear any existing content
    teamGrid.innerHTML = '';
    
    // Iterate over the data array to build HTML
    teamMembers.forEach(member => {
        // Create the card container
        const card = document.createElement('div');
        card.className = 'team-card';
        
        // Assemble card inner HTML with left image and right text content
        card.innerHTML = `
            <img src="${member.photoUrl}" alt="Profile photo of ${member.name}" class="profile-img">
            <h3 class="member-name">${member.name}</h3>
            <div class="member-role">
                <i data-lucide="user" class="role-icon"></i>
                <span>${member.role}</span>
            </div>
            <div class="social-links">
                <a href="${member.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn Profile for ${member.name}">
                    <i data-lucide="linkedin"></i>
                </a>
                <a href="${member.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub Profile for ${member.name}">
                    <i data-lucide="github"></i>
                </a>
            </div>
            <div class="short-divider"></div>
            <p class="member-desc">${member.description}</p>
        `;
        
        // Append card to grid
        teamGrid.appendChild(card);
    });
    
    // Initialize Lucide icons for dynamically injected elements
    createIcons({ icons });
}

// Ensure the DOM is fully loaded before rendering the grid
document.addEventListener('DOMContentLoaded', () => {
    renderTeamCards();
    
    // Initialize static icons already present in the HTML header/footer
    createIcons({ icons });
});
