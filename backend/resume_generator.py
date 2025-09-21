from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from datetime import datetime
import os

def generate_resume_pdf(output_path: str):
    """Generate Uday Jain's resume PDF"""
    
    # Create the PDF document
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch
    )
    
    # Container for the 'Flowable' objects
    story = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=12,
        textColor=colors.HexColor('#f97316'),  # Orange color
        alignment=TA_CENTER
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=14,
        spaceAfter=20,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151')  # Gray color
    )
    
    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=16,
        spaceBefore=20,
        spaceAfter=10,
        textColor=colors.HexColor('#f97316'),  # Orange color
        borderWidth=1,
        borderColor=colors.HexColor('#f97316'),
        borderPadding=5
    )
    
    # Header - Name and Contact
    story.append(Paragraph("UDAY JAIN", title_style))
    story.append(Paragraph("Security Analyst @ Sopra Steria | Cybersecurity, Burp Suite Expert", subtitle_style))
    
    # Contact Information
    contact_info = [
        ['Email: udayjain1799@gmail.com', 'Location: Noida, Uttar Pradesh, India'],
        ['LinkedIn: linkedin.com/uday-jain17', 'Phone: Available upon request']
    ]
    
    contact_table = Table(contact_info, colWidths=[3*inch, 3*inch])
    contact_table.setStyle(TableStyle([
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 20))
    
    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_header_style))
    summary_text = """
    Passionate cybersecurity professional with 3+ years of experience at Sopra Steria, specializing in Burp Suite and security vulnerability assessments. Expert in identifying and mitigating security risks with a deep understanding of cybersecurity best practices. Recently expanded expertise with 16 hours of intensive AI workshop training, combining traditional security practices with modern AI-driven approaches.
    """
    story.append(Paragraph(summary_text, styles['Normal']))
    story.append(Spacer(1, 15))
    
    # Core Skills
    story.append(Paragraph("CORE SKILLS", section_header_style))
    skills_data = [
        ['Security & Assessment:', 'Burp Suite, Security Vulnerability Assessment, SBOM Analysis, Penetration Testing'],
        ['Security Tools:', 'SPDX Format Analysis, CycloneDX Format Analysis, Vulnerability Scanners, SIEM Tools'],
        ['Emerging Tech:', 'AI-Powered Security Analysis, Machine Learning in Cybersecurity, Generative AI Applications']
    ]
    
    skills_table = Table(skills_data, colWidths=[1.5*inch, 4.5*inch])
    skills_table.setStyle(TableStyle([
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (0, -1), 'RIGHT'),
        ('ALIGN', (1, 0), (1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 15))
    
    # Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_header_style))
    
    # Senior Security Analyst
    story.append(Paragraph("<b>Senior Security Analyst</b> | Sopra Steria | July 2025 - Present", styles['Heading3']))
    senior_responsibilities = """
    • Lead security vulnerability assessments for critical digital infrastructure<br/>
    • Mentor junior security analysts and provide technical guidance<br/>
    • Implement advanced Burp Suite configurations for enterprise applications<br/>
    • Collaborate with development teams to integrate security best practices<br/>
    • Reduced critical vulnerabilities by 40% through proactive assessment strategies
    """
    story.append(Paragraph(senior_responsibilities, styles['Normal']))
    story.append(Spacer(1, 10))
    
    # Security Analyst
    story.append(Paragraph("<b>Security Analyst</b> | Sopra Steria | January 2023 - July 2025", styles['Heading3']))
    analyst_responsibilities = """
    • Performed comprehensive security vulnerability assessments<br/>
    • Analyzed dependency graphs to identify potential security risks<br/>
    • Developed and maintained security testing protocols<br/>
    • Successfully identified and mitigated 200+ security vulnerabilities<br/>
    • Improved security assessment efficiency by 35% through process optimization
    """
    story.append(Paragraph(analyst_responsibilities, styles['Normal']))
    story.append(Spacer(1, 10))
    
    # Engineer Trainee
    story.append(Paragraph("<b>Engineer Trainee</b> | Sopra Steria | August 2022 - January 2023", styles['Heading3']))
    trainee_responsibilities = """
    • Assisted senior analysts in security assessments and testing<br/>
    • Learned Burp Suite and other security testing tools<br/>
    • Participated in vulnerability research and analysis<br/>
    • Completed comprehensive cybersecurity training program
    """
    story.append(Paragraph(trainee_responsibilities, styles['Normal']))
    story.append(Spacer(1, 15))
    
    # Key Projects
    story.append(Paragraph("KEY PROJECTS", section_header_style))
    
    # SBOM Project
    story.append(Paragraph("<b>SBOM Vulnerability Analysis Tool</b> (2024)", styles['Heading3']))
    sbom_description = """
    Developed a comprehensive Software Bill of Materials (SBOM) analysis tool that processes both SPDX and CycloneDX format files to identify underlying vulnerabilities in software dependencies. Enables organizations to proactively identify security risks in their software supply chain, reducing potential attack vectors by up to 60%.
    """
    story.append(Paragraph(sbom_description, styles['Normal']))
    story.append(Spacer(1, 10))
    
    # Burp Suite Framework
    story.append(Paragraph("<b>Burp Suite Automation Framework</b> (2024)", styles['Heading3']))
    burp_description = """
    Created an automated security testing framework using Burp Suite to streamline web application security assessments across multiple environments. Reduced manual security testing time by 70% while increasing coverage and consistency of security assessments.
    """
    story.append(Paragraph(burp_description, styles['Normal']))
    story.append(Spacer(1, 15))
    
    # Certifications
    story.append(Paragraph("CERTIFICATIONS", section_header_style))
    certifications_data = [
        ['Vulnerability Management - Foundation', 'Qualys', '2024'],
        ['Generative AI Fundamentals', 'Databricks', '2024'],
        ['Certified Cybersecurity Technician (CCT)', 'EC Council', '2023'],
        ['AI Workshop Certification (16 hours)', 'Outskills', '2024']
    ]
    
    cert_table = Table(certifications_data, colWidths=[3*inch, 1.5*inch, 1*inch])
    cert_table.setStyle(TableStyle([
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
    ]))
    story.append(cert_table)
    story.append(Spacer(1, 15))
    
    # Education
    story.append(Paragraph("EDUCATION", section_header_style))
    story.append(Paragraph("<b>Bachelor of Technology - Computer Science</b>", styles['Heading3']))
    story.append(Paragraph("Teerthanker Mahaveer University, Moradabad | 2018 - 2022 | GPA: 8.2/10", styles['Normal']))
    
    # Footer
    story.append(Spacer(1, 30))
    footer_text = f"Resume generated on {datetime.now().strftime('%B %d, %Y')}"
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=8,
        alignment=TA_CENTER,
        textColor=colors.gray
    )
    story.append(Paragraph(footer_text, footer_style))
    
    # Build PDF
    doc.build(story)
    return True

if __name__ == "__main__":
    # Test the function
    generate_resume_pdf("/app/backend/assets/Uday_Jain_Resume.pdf")
    print("Resume PDF generated successfully!")