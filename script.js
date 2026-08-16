import { createIcons, icons } from 'lucide';

// Data array containing the exact team members from the reference image
const teamMembers = [
    {
        name: "TharunKumar K",
        role: "Team Lead & Full Stack Developer",
        photoUrl: "/images/TharunKumar.jpeg", 
        description: "Leading the project architecture and integrating core academic workflows, dashboards, and full-stack functionality.",
        linkedinUrl: "https://www.linkedin.com/in/tharunkumark4743/",
        githubUrl: "https://github.com/Tharun4743"
    },
    {
        name: "Abirubha P",
        role: "AI & Automation Developer",
        photoUrl: "/images/Abirubha.jpeg",
        description: "Developing intelligent automation features and integrating automated workflows to improve the efficiency of the IT Task Manager.",
        linkedinUrl: "https://www.linkedin.com/in/abirubha-ponnusamy-42b511417/",
        githubUrl: "https://github.com/Abirubha2007"
    },
    {
        name: "RamKishore S M",
        role: "Backend Developer",
        photoUrl: "/images/RamKishore.jpeg",
        description: "Developing backend services, APIs, business logic, and reliable data flow for the academic task management platform.",
        linkedinUrl: " https://www.linkedin.com/in/ramkishore-sm-919507314",
        githubUrl: "https://github.com/r076-Ram"
    },
    {
        name: "SanthoshKumar S",
        role: "Frontend Developer",
        photoUrl: "/images/SanthoshKumar.jpeg",
        description: "Building responsive and intuitive user interfaces for students, faculty, coordinators, and administrators.",
        linkedinUrl: "https://www.linkedin.com/in/santhoshkumar-s007/",
        githubUrl: "https://github.com/SanthoshkumarS2407"
    },
    {
        name: "Elakkiyaa V",
        role: "Database Developer",
        photoUrl: "/images/Elakkiyaa%20V.jpeg",
        description: "Designing and managing database structures, data workflows, queries, and reliable storage for the platform.",
        linkedinUrl: "https://www.linkedin.com/in/elakkiyaa-viswanathan-357356387/",
        githubUrl: "https://github.com/Elakkiyaa55197"
    },
    {
        name: "Subhasri L",
        role: "DevOps & Documentation",
        photoUrl: "/images/Subhasri.jpeg",
        description: "Supporting deployment workflows, project documentation, and maintaining reliable development processes.",
        linkedinUrl: "https://www.linkedin.com/in/subhasri-l-725373392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        githubUrl: "https://github.com/Subhasriloganathan"
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
