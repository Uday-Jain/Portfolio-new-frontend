// Mock data for Uday Jain's Cybersecurity Portfolio

export const personalInfo = {
  name: "Uday Jain",
  title: "Security Analyst @ Sopra Steria",
  subtitle: "Cybersecurity, Burp Suite Expert",
  location: "Noida, Uttar Pradesh, India",
  email: "udayjain1799@gmail.com",
  linkedin: "https://www.linkedin.com/in/uday-jain17/",
  github: "https://github.com/udayjain1799", // placeholder
  summary: "Passionate cybersecurity professional with 3+ years of experience at Sopra Steria, specializing in Burp Suite and security vulnerability assessments. Expert in identifying and mitigating security risks with a deep understanding of cybersecurity best practices. Recently expanded expertise with 16 hours of intensive AI workshop training, combining traditional security practices with modern AI-driven approaches."
};

export const skills = {
  technical: [
    "Burp Suite",
    "Security Vulnerability Assessment", 
    "SBOM Analysis",
    "Dependency Graph Analysis",
    "Penetration Testing",
    "Web Application Security",
    "Network Security",
    "Security Auditing",
    "Risk Assessment",
    "Incident Response"
  ],
  tools: [
    "SPDX Format Analysis",
    "CycloneDX Format Analysis", 
    "Vulnerability Scanners",
    "Security Testing Tools",
    "SIEM Tools",
    "Burp Suite",
    "Nessus",
    "Wireshark",
    "Metasploit",
    "Nmap"
  ],
  emerging: [
    "AI-Powered Security Analysis",
    "Machine Learning in Cybersecurity",
    "Generative AI Applications",
    "AI Workshop Certification (16 hours)"
  ]
};

export const experience = [
  {
    company: "Sopra Steria",
    position: "Senior Security Analyst",
    duration: "July 2025 - Present",
    period: "3 months",
    location: "Noida, Uttar Pradesh, India",
    responsibilities: [
      "Lead security vulnerability assessments for critical digital infrastructure",
      "Mentor junior security analysts and provide technical guidance",
      "Implement advanced Burp Suite configurations for enterprise applications",
      "Collaborate with development teams to integrate security best practices",
      "Conduct security risk assessments and provide strategic recommendations"
    ],
    achievements: [
      "Reduced critical vulnerabilities by 40% through proactive assessment strategies",
      "Established automated security testing protocols using Burp Suite"
    ]
  },
  {
    company: "Sopra Steria", 
    position: "Security Analyst",
    duration: "January 2023 - July 2025",
    period: "2 years 7 months", 
    location: "Noida, Uttar Pradesh, India",
    responsibilities: [
      "Performed comprehensive security vulnerability assessments",
      "Analyzed dependency graphs to identify potential security risks",
      "Developed and maintained security testing protocols",
      "Created detailed security reports and remediation recommendations",
      "Collaborated with cross-functional teams to implement security measures"
    ],
    achievements: [
      "Successfully identified and mitigated 200+ security vulnerabilities",
      "Improved security assessment efficiency by 35% through process optimization"
    ]
  },
  {
    company: "Sopra Steria",
    position: "Engineer Trainee", 
    duration: "August 2022 - January 2023",
    period: "6 months",
    location: "Noida, Uttar Pradesh, India",
    responsibilities: [
      "Assisted senior analysts in security assessments and testing",
      "Learned Burp Suite and other security testing tools", 
      "Participated in vulnerability research and analysis",
      "Contributed to security documentation and reporting",
      "Supported incident response and security monitoring activities"
    ],
    achievements: [
      "Completed comprehensive cybersecurity training program",
      "Earned recognition for quick learning and technical aptitude"
    ]
  }
];

export const projects = [
  {
    title: "SBOM Vulnerability Analysis Tool",
    category: "Security Software Development",
    description: "Developed a comprehensive Software Bill of Materials (SBOM) analysis tool that processes both SPDX and CycloneDX format files to identify underlying vulnerabilities in software dependencies.",
    technologies: ["Python", "SPDX Parser", "CycloneDX Parser", "Vulnerability Databases", "Security Analysis"],
    features: [
      "Multi-format SBOM support (SPDX & CycloneDX)",
      "Real-time vulnerability scanning and detection",
      "Comprehensive dependency graph analysis", 
      "Detailed security risk reporting",
      "Integration with major vulnerability databases",
      "Export capabilities for security reports"
    ],
    impact: "Enables organizations to proactively identify security risks in their software supply chain, reducing potential attack vectors by up to 60%.",
    status: "Production Ready",
    year: "2024"
  },
  {
    title: "Burp Suite Automation Framework",
    category: "Security Testing Automation",
    description: "Created an automated security testing framework using Burp Suite to streamline web application security assessments across multiple environments.",
    technologies: ["Burp Suite", "Python", "REST APIs", "CI/CD Integration", "Docker"],
    features: [
      "Automated web application security scanning",
      "Custom security test cases and rules",
      "Integration with development pipelines", 
      "Comprehensive vulnerability reporting",
      "Multi-environment support"
    ],
    impact: "Reduced manual security testing time by 70% while increasing coverage and consistency of security assessments.",
    status: "In Use",
    year: "2024"
  }
];

export const certifications = [
  {
    name: "Vulnerability Management - Foundation",
    issuer: "Qualys",
    year: "2024",
    description: "Comprehensive foundation in vulnerability management practices and methodologies"
  },
  {
    name: "Academy Accreditation - Generative AI Fundamentals", 
    issuer: "Databricks",
    year: "2024",
    description: "Foundational knowledge in generative AI technologies and applications in cybersecurity"
  },
  {
    name: "Certified Cybersecurity Technician (CCT)",
    issuer: "EC Council",
    year: "2023", 
    description: "Professional certification validating technical cybersecurity skills and knowledge"
  },
  {
    name: "AI Workshop Certification",
    issuer: "Outskills",
    year: "2024",
    duration: "16 hours",
    description: "Intensive hands-on workshop covering AI applications in cybersecurity, machine learning for threat detection, and AI-powered security analysis"
  }
];

export const education = {
  degree: "Bachelor of Technology - BTech",
  field: "Computer Science",
  university: "Teerthanker Mahaveer University",
  location: "Moradabad",
  duration: "2018 - 2022",
  gpa: "8.2/10", // placeholder
  relevantCourses: [
    "Network Security",
    "Cryptography", 
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems"
  ]
};

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Senior Security Manager",
    company: "Sopra Steria", 
    text: "Uday's expertise in Burp Suite and vulnerability assessment has been invaluable to our security team. His proactive approach and attention to detail have significantly improved our security posture.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    company: "Sopra Steria",
    text: "Working with Uday on security assessments has been excellent. His SBOM analysis tool has revolutionized how we approach dependency security in our projects.",
    rating: 5
  }
];

// Static frontend functions with EmailJS integration
import emailjs from '@emailjs/browser';

// EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_bs6508h'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_o17snbg'; // Replace with your EmailJS template ID  
const EMAILJS_PUBLIC_KEY = 'qhMUfU4TdTCV_JPmI'; // Replace with your EmailJS public key

export const submitContactForm = async (formData) => {
  try {
    // EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      organisation: formData.company || 'Not specified',
      message: formData.message,
      to_email: 'udayjain1799@gmail.com' // Your Gmail address
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! I will get back to you within 24 hours.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

export const downloadResume = async () => {
  try {
    // Create a download link for the static PDF
    const link = document.createElement('a');
    link.href = '/Uday_Jain_Resume.pdf';
    link.download = 'Uday_Jain_Cybersecurity_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return {
      success: true,
      message: 'Resume downloaded successfully!'
    };
  } catch (error) {
    console.error('Resume download error:', error);
    throw new Error('Failed to download resume');
  }
};
