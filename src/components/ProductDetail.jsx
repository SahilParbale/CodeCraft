import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Building2, Zap, Clock, LineChart, Download, ArrowRight, 
  Settings, Users, FolderOpen, Map, Bell, ShieldCheck, Monitor, Smartphone, CheckCircle2, Megaphone, Check,
  Activity, FileText
} from 'lucide-react';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';
import voterImg from '../assets/voter_dashboard.png';
import gimbooksImg from '../assets/gimbooks_dashboard.png';

// Dynamic product data to power the page
const productData = {
  nagarsevak: {
    name: 'Nagarsevak Management',
    description: 'The ultimate all-in-one ERP and workflow automation system designed exclusively for modern civic leaders. Connect with citizens, manage your office, and track local development effortlessly.',
    tags: [
      { icon: <Zap size={14} />, text: 'Smart Automation & AI Integration' },
      { icon: <Clock size={14} />, text: 'Real-time Tracking & Alerts' },
      { icon: <LineChart size={14} />, text: 'Data Driven Insights & Analytics' },
      { icon: <Smartphone size={14} />, text: '100% Mobile Responsive' }
    ],
    image: nagarsevakImg,
    icon: <Building2 size={32} />,
    accentColor: '#2563eb',
    keyFunctionalities: [
      {
        title: 'Smart Complaint Management',
        icon: <Building2 size={24} />,
        desc: 'Citizens can raise complaints; offices can auto-route, assign, and track them to resolution in real-time.'
      },
      {
        title: 'Advanced Voter Management',
        icon: <Users size={24} />,
        desc: 'Maintain exhaustive voter databases, search profiles rapidly, and generate detailed PDF voter slips and lists.'
      },
      {
        title: 'Task & Public Works Tracking',
        icon: <Settings size={24} />,
        desc: 'Create tasks, assign them to staff, and track the progress of municipal and local public works from start to finish.'
      },
      {
        title: 'Budget & Scheme Management',
        icon: <Building2 size={24} />,
        desc: 'Track local funds, monitor project budgets, and manage the distribution of government schemes to eligible beneficiaries.'
      },
      {
        title: 'Multi-channel Communication',
        icon: <Megaphone size={24} />,
        desc: 'Broadcast SMS, emails, and utilize advanced AI Voice Calling to connect directly with your constituency.'
      },
      {
        title: 'Office & Diary Management',
        icon: <FolderOpen size={24} />,
        desc: 'Digitize your daily diary, manage appointments, track official inward/outward letters, and oversee your staff.'
      },
      {
        title: 'Political & Campaign Analytics',
        icon: <LineChart size={24} />,
        desc: 'Conduct surveys, analyze past election results, manage party workers (Sadasyas), and track political campaigns.'
      },
      {
        title: 'Advanced Reports & Dashboards',
        icon: <LineChart size={24} />,
        desc: 'Generate insightful daily, weekly, and monthly reports to analyze performance with visual dashboards.'
      },
      {
        title: 'Social & Media Integration',
        icon: <Smartphone size={24} />,
        desc: 'Manage social media updates, press releases, and maintain a centralized digital media gallery.'
      }
    ],
    versions: [
      {
        id: 'nagarsevak',
        version: 'Nagarsevak',
        label: 'Local level',
        status: 'Available',
        description: 'The complete management system tailored specifically for Nagarsevaks to handle local ward issues, citizen databases, and daily administrative tasks.',
        tiers: {
          Basic: {
            description: 'Perfect for newly elected leaders getting started with digital ward management.',
            whatsNew: [
              '📊 Dashboard: Quick overview of daily pending items.',
              '🗺️ Ward Management: Basic ward details and demographics.',
              '👥 Citizen/Voter Directory: Searchable local citizen database.',
              '📝 Complaint Tracking: Standard grievance logging and status updates.',
              '✅ Task Management: Daily personal and office to-do lists.',
              '📅 Diary & Appointments: Digital scheduling for meetings and public visits.',
              '🗓️ Events Calendar: Track upcoming local events.',
              '📱 Web Application Access: Secure cloud access from any device.'
            ]
          },
          Pro: {
            description: 'Comprehensive administrative tools for active wards with dedicated office staff.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '🏢 Office & Staff Management: Role-based access control for multiple staff members.',
              '✉️ Official Letters Management: Digitize and track all Inward and Outward correspondence.',
              '💰 Budget & Funds Tracking: Monitor allocated ward funds and expenditures.',
              '🏗️ Public Works Management: Track the live status of local infrastructure works.',
              '🏛️ Government Schemes: Track available schemes and manage local beneficiaries.',
              '📢 Communication Tools: Send bulk SMS and Email broadcasts to citizens.',
              '📱 Social Media Hub: Centralized management for social posts.',
              '🖼️ Media & PR Gallery: Organize photos, videos, and press coverage.',
              '🔔 Notifications & Alerts: In-app and email alerts for critical updates.'
            ]
          },
          Advance: {
            description: 'Enterprise-grade solution for data-driven governance and massive political campaigns.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '🤖 AI Voice Call Integration: Send automated voice broadcasts to massive voter lists.',
              '📄 Advanced Voter Analytics: Generate custom PDF reports and booth-level analytics.',
              '🎯 Political Campaign Management: Plan, execute, and monitor election campaigns.',
              '🤝 Party Worker (Sadasya) Management: Track karyakartas, their roles, and performance.',
              '📋 Surveys & Feedback: Create digital surveys and collect data directly from the field.',
              '📈 Election Results Analysis: Historical data tracking and predictive booth insights.',
              '⚡ Smart Workflow Automations: Auto-assign complaints and tasks based on categories.',
              '📍 GIS Mapping Integration: View complaints, public works, and voter density on interactive maps.',
              '📞 Priority Support: Dedicated Account Manager and 24/7 priority onboarding.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      { 
        id: 'amdar', 
        version: 'Amdar', 
        label: 'Constituency level',
        status: 'Available',
        description: 'Comprehensive platform for Amdars (MLAs) to manage their entire constituency, oversee multiple wards, and track large-scale projects.',
        tiers: {
          Basic: {
            description: 'Essential digital tools for newly elected Amdars to manage constituency data and daily tasks.',
            whatsNew: [
              'Dashboard: Overview of pending items across the constituency.',
              'Constituency Management: Basic area details and demographics.',
              'Citizen/Voter Directory: Searchable citizen database.',
              'Complaint Tracking: Constituency-wide grievance logging.',
              'Task Management: Daily personal and office to-do lists.',
              'Diary & Appointments: Digital scheduling for meetings.',
              'Events Calendar: Track upcoming constituency events.',
              'Web Application Access: Secure cloud access from any device.'
            ]
          },
          Pro: {
            description: 'Comprehensive administrative tools for active constituencies with dedicated office staff.',
            whatsNew: [
              'Includes all Basic features, plus:',
              'Office & Staff Management: Role-based access control for multiple staff members.',
              'Official Letters Management: Digitize and track all Inward and Outward correspondence.',
              'Legislative Funds Tracking: Monitor allocated MLA funds and expenditures.',
              'Public Works Management: Track the live status of major infrastructure works.',
              'Government Schemes: Track and manage constituency-level beneficiaries.',
              'Communication Tools: Send bulk SMS and Email broadcasts.',
              'Social Media Hub: Centralized management for social posts.',
              'Media & PR Gallery: Organize photos, videos, and press coverage.'
            ]
          },
          Advance: {
            description: 'Enterprise-grade solution for data-driven governance and massive political campaigns at the constituency level.',
            whatsNew: [
              'Includes all Pro features, plus:',
              'AI Voice Call Integration: Automated voice broadcasts to massive voter lists.',
              'Advanced Voter Analytics: Generate custom PDF reports and booth-level analytics.',
              'Political Campaign Management: Plan, execute, and monitor election campaigns.',
              'Party Worker Management: Track karyakartas, their roles, and performance.',
              'Surveys & Feedback: Collect data directly from the field.',
              'Election Results Analysis: Historical data tracking and predictive insights.',
              'GIS Mapping Integration: View complaints and voter density on interactive maps.',
              'Priority Support: Dedicated Account Manager and 24/7 priority onboarding.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      { 
        id: 'khasdar', 
        version: 'Khasdar', 
        label: 'District level',
        status: 'Available',
        description: 'High-level dashboard for Khasdars (MPs) to monitor district progress, coordinate with multiple assembly constituencies, and manage national scheme implementations.',
        tiers: {
          Basic: {
            description: 'Essential digital tools for Khasdars to manage district-wide data and daily tasks.',
            whatsNew: [
              'Dashboard: Overview of pending items across the district.',
              'District Management: Basic assembly details and demographics.',
              'Citizen/Voter Directory: Searchable district citizen database.',
              'Complaint Tracking: District-wide grievance logging.',
              'Task Management: Daily personal and office to-do lists.',
              'Diary & Appointments: Digital scheduling for meetings.',
              'Events Calendar: Track upcoming district events.',
              'Web Application Access: Secure cloud access from any device.'
            ]
          },
          Pro: {
            description: 'Comprehensive administrative tools for managing district offices and cross-constituency tasks.',
            whatsNew: [
              'Includes all Basic features, plus:',
              'Office & Staff Management: Role-based access control for multiple staff members.',
              'Official Letters Management: Digitize and track all Inward and Outward correspondence.',
              'MP Funds Tracking: Monitor allocated central funds and expenditures.',
              'Public Works Management: Track the live status of national infrastructure works.',
              'Government Schemes: Track and manage central scheme beneficiaries.',
              'Communication Tools: Send bulk SMS and Email broadcasts.',
              'Social Media Hub: Centralized management for social posts.',
              'Media & PR Gallery: Organize photos, videos, and press coverage.'
            ]
          },
          Advance: {
            description: 'Enterprise-grade solution for data-driven governance and massive political campaigns at the district level.',
            whatsNew: [
              'Includes all Pro features, plus:',
              'AI Voice Call Integration: Automated voice broadcasts to massive voter lists.',
              'Advanced Voter Analytics: Generate custom PDF reports and assembly-level analytics.',
              'Political Campaign Management: Plan, execute, and monitor election campaigns.',
              'Party Worker Management: Track karyakartas, their roles, and performance.',
              'Surveys & Feedback: Collect data directly from the field.',
              'Election Results Analysis: Historical data tracking and predictive insights.',
              'GIS Mapping Integration: View complaints and voter density on interactive maps.',
              'Priority Support: Dedicated Account Manager and 24/7 priority onboarding.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      { 
        id: 'minister', 
        version: 'Minister', 
        label: 'State level',
        status: 'Available',
        description: 'Executive command center for Ministers to oversee department-wide operations, state-level metrics, and high-priority administrative tasks.',
        tiers: {
          Basic: {
            description: 'Essential digital tools for Ministers to manage departmental tasks and daily operations.',
            whatsNew: [
              'Dashboard: State-wide real-time dashboard.',
              'Department Management: High-level department tracking.',
              'Citizen/Voter Directory: State-wide search capabilities.',
              'Complaint Tracking: Departmental grievance logging.',
              'Task Management: High-priority task delegation.',
              'Diary & Appointments: Digital scheduling for state meetings.',
              'Events Calendar: Track upcoming state events.',
              'Web Application Access: Secure cloud access from any device.'
            ]
          },
          Pro: {
            description: 'Comprehensive administrative tools for managing state departments and official correspondence.',
            whatsNew: [
              'Includes all Basic features, plus:',
              'Office & Staff Management: Role-based access control for department staff.',
              'Official Letters Management: Digitize and track all Inward and Outward correspondence.',
              'Department Funds Tracking: Monitor allocated state funds and expenditures.',
              'Public Works Management: Track the live status of state-wide infrastructure works.',
              'Government Schemes: Track and manage state scheme beneficiaries.',
              'Communication Tools: Send bulk SMS and Email broadcasts.',
              'Social Media Hub: Centralized management for social posts.',
              'Media & PR Gallery: Organize photos, videos, and press coverage.'
            ]
          },
          Advance: {
            description: 'Enterprise-grade executive command center for data-driven governance at the state level.',
            whatsNew: [
              'Includes all Pro features, plus:',
              'AI Insights: Executive summaries and automated predictive insights.',
              'AI Voice Call Integration: Automated voice broadcasts to state-wide voter lists.',
              'Advanced Voter Analytics: Generate custom reports and district-level analytics.',
              'Political Campaign Management: Plan, execute, and monitor state election campaigns.',
              'Party Worker Management: Track karyakartas, their roles, and performance.',
              'Surveys & Feedback: Collect data directly from the state.',
              'Election Results Analysis: Historical data tracking and predictive insights.',
              'GIS Mapping Integration: View complaints and asset distribution on interactive maps.',
              'Priority Support: Dedicated Account Manager and 24/7 priority onboarding.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      }
    ],
    stats: [
      { value: '50+', label: 'Cities Using', icon: <Building2 size={24} /> },
      { value: '10K+', label: 'Active Users', icon: <Users size={24} /> },
      { value: '1M+', label: 'Complaints Resolved', icon: <Users size={24} /> },
      { value: '98%', label: 'User Satisfaction', icon: <ShieldCheck size={24} /> }
    ]
  },
  voterpro: {
    name: 'Voter Management',
    description: 'Smart voter data management with verification, tracking, and deep demographic analytics. Empower your campaign teams to organize voter rolls, track volunteers, and manage voter interactions in real-time.',
    tags: [
      { icon: <Users size={14} />, text: 'Electoral Roll Management' },
      { icon: <Map size={14} />, text: 'Booth & Area Mapping' },
      { icon: <ShieldCheck size={14} />, text: 'Verification & Deduplication' },
      { icon: <LineChart size={14} />, text: 'Demographic Insights' }
    ],
    image: voterImg,
    icon: <Users size={32} />,
    accentColor: '#2563eb',
    keyFunctionalities: [
      {
        title: 'Electoral Roll Search & Filters',
        icon: <Users size={24} />,
        desc: 'Quickly find voters using autocomplete search, family-grouping logic, and filters like age, gender, and ward.'
      },
      {
        title: 'Booth & Sector Mapping',
        icon: <Map size={24} />,
        desc: 'Organize your campaign geographically. Map voters to specific booths, pages (Prashikshak), and polling stations.'
      },
      {
        title: 'Data Cleansing & Deduplication',
        icon: <ShieldCheck size={24} />,
        desc: 'Identify duplicate entries, deceased voters, and citizens who have relocated to ensure a highly accurate list.'
      },
      {
        title: 'Ground Worker App (Karyakarta)',
        icon: <Smartphone size={24} />,
        desc: 'Equip field volunteers with a mobile-responsive tool to verify voters door-to-door and log local feedback.'
      },
      {
        title: 'Voter Slips & List Generation',
        icon: <Download size={24} />,
        desc: 'Generate, print, and share personalized PDF voter slips and booth lists complete with local office contact info.'
      },
      {
        title: 'Segmented Broadcasts',
        icon: <Megaphone size={24} />,
        desc: 'Send targeted notifications, scheme details, and greeting messages via SMS, WhatsApp, and email.'
      },
      {
        title: 'Demographic & Mood Analytics',
        icon: <LineChart size={24} />,
        desc: 'Visualize demographic statistics and track overall voter sentiment based on surveys and interactions.'
      },
      {
        title: 'Historical Results Mapping',
        icon: <Clock size={24} />,
        desc: 'Compare voter feedback with previous election outcomes at the booth level to pinpoint focus areas.'
      },
      {
        title: 'Role-Based Access Control',
        icon: <Settings size={24} />,
        desc: 'Keep data secure. Assign strict read/write permissions for administrators, office staff, and ground workers.'
      }
    ],
    versions: [
      {
        id: 'booth_level',
        version: 'Ward/Booth Level',
        label: 'Local/Booth level',
        status: 'Available',
        description: 'Designed for local candidates or booth coordinators to manage immediate voting centers, track local families, and mobilize neighborhood volunteers.',
        tiers: {
          Basic: {
            description: 'Perfect for small local campaigns getting started with digital voter tracking.',
            whatsNew: [
              '📊 Dashboard: Overview of assigned booth stats.',
              '🔍 Searchable Directory: Look up voters by name and age.',
              '📍 Basic Booth Details: View booth assignment details.',
              '📝 Voter Notes: Log basic remarks for voter interactions.',
              '✅ Task Management: Simple daily tasks for booth volunteers.',
              '📱 Web Access: Standard mobile-responsive portal.'
            ]
          },
          Pro: {
            description: 'Comprehensive administrative tools for booth campaigns with multiple local volunteers.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '👥 Family Grouping: Link voters by household/family groups.',
              '🗺️ Sub-locality Mapping: Group voters by specific buildings or alleys.',
              '📱 Karyakarta Management: Assign and track tasks for up to 20 field workers.',
              '📄 PDF Voter Slips: Generate and export print-ready voter slips.',
              '📢 SMS API Integration: Send basic updates to verified voters.'
            ]
          },
          Advance: {
            description: 'Data-driven neighborhood management with smart automation and full campaign features.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '⚡ Smart Deduplication: Automatically flag duplicate records.',
              '🔊 Custom Voice Broadcasts: Deliver pre-recorded messages directly to voters.',
              '🎯 Sentiments Analysis: Tag voter mood (supportive, neutral, opposing).',
              '📈 Analytics Dashboard: Real-time charts of demographics.',
              '📞 Priority Support: Onboarding assistance and 24/7 support during elections.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      {
        id: 'constituency_level',
        version: 'Constituency Level',
        label: 'Assembly level',
        status: 'Available',
        description: 'Comprehensive platform for Amdars (MLAs) and assembly candidates to oversee hundreds of booths, coordinate massive volunteer teams, and target outreach.',
        tiers: {
          Basic: {
            description: 'Essential digital tools to manage constituency voter rolls and track basic metrics.',
            whatsNew: [
              '📊 Assembly Dashboard: High-level overview of voter demographics.',
              '🔍 Advanced Search: Filter voters across the entire constituency.',
              '👥 Karyakarta Directory: Register and coordinate field workers.',
              '📋 Basic Reports: Download standard booth-wise lists.'
            ]
          },
          Pro: {
            description: 'Comprehensive management for active campaigns with core committee access and communication systems.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '🏢 Multi-User Access: Separate logins with permissions for core office staff.',
              '💬 Integrated Messaging: Run targeted SMS, email, and WhatsApp campaigns.',
              '📋 Survey Designer: Create custom question sets for ground workers to fill.',
              '💰 Campaign Budget Tracker: Log and monitor outreach expenses.',
              '🔔 Real-time Alerts: Notifications when worker tasks are completed.'
            ]
          },
          Advance: {
            description: 'State-of-the-art campaign engine featuring AI automation and geographical analytics.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '🤖 AI Voice calling: Automated dialing system with speech recognition.',
              '📊 Historical Result Overlay: Compare real-time voter sentiment with historical data.',
              '🗺️ Interactive GIS Maps: Visual heatmaps of voter support and density.',
              '🔗 API Integrations: Sync voter databases with external CRMs.',
              '⚡ Priority Cloud Hosting: Dedicated server instances with high speed.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      {
        id: 'district_level',
        version: 'District/State Level',
        label: 'Parliamentary/State level',
        status: 'Available',
        description: 'High-scale command center for Khasdars (MPs) or party headquarters to monitor voter databases across multiple assembly constituencies, manage state-wide karyakarta hierarchies, and coordinate centralized campaign strategies.',
        tiers: {
          Basic: {
            description: 'District-wide coordination and database access for campaign command teams.',
            whatsNew: [
              '📊 Central Command Dashboard: Interactive charts mapping voter groups by district.',
              '🔍 Multi-Assembly Directory: Search millions of voter profiles instantly.',
              '📈 High-Level Telemetry: Overview of voter database status across assemblies.'
            ]
          },
          Pro: {
            description: 'Advanced administration tools for coordinating parliamentary campaigns with regional offices.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '🏢 Hierarchy Management: Coordinate state, district, assembly, and booth teams.',
              '📢 State-wide Broadcasts: Run massive communications across all assemblies.',
              '📂 Campaign Asset Library: Share graphics, videos, and scripts with local coordinators.',
              '🕵️ Compliance & Audit Logs: Detailed log of database changes for security.'
            ]
          },
          Advance: {
            description: 'Enterprise-grade big data infrastructure with predictive analytics and high-security hosting.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '🚀 Big Data Processing: Efficiently query datasets with 5M+ voters.',
              '🔮 Predictive AI Modeling: Project voting outcomes based on demographic shifts.',
              '🔒 Military-Grade Security: End-to-end encryption, regular penetration testing, and MFA.',
              '💼 24/7 War Room Support: Dedicated engineers and support team during election week.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      }
    ],
    stats: [
      { value: '120+', label: 'Campaigns Run', icon: <Building2 size={24} /> },
      { value: '50K+', label: 'Volunteers Managed', icon: <Users size={24} /> },
      { value: '15M+', label: 'Voters Tracked', icon: <Users size={24} /> },
      { value: '99.5%', label: 'Deduplication Accuracy', icon: <ShieldCheck size={24} /> }
    ]
  },
  gimbooks: {
    name: 'GimBooks (Accounting)',
    description: 'Smart accounting, invoicing, and bookkeeping solution designed for modern businesses. Streamline billing, track expenses, manage inventory, and generate tax-compliant financial reports in seconds.',
    tags: [
      { icon: <FileText size={14} />, text: 'Invoicing & Billing' },
      { icon: <LineChart size={14} />, text: 'Expense & Tax Tracking' },
      { icon: <Settings size={14} />, text: 'Inventory Management' },
      { icon: <Users size={14} />, text: 'Multi-User Collaboration' }
    ],
    image: gimbooksImg,
    icon: <Activity size={32} />,
    accentColor: '#2563eb',
    keyFunctionalities: [
      {
        title: 'Invoice & Billing Generation',
        icon: <FileText size={24} />,
        desc: 'Create professional, customizable invoices, estimates, and purchase orders in multiple formats.'
      },
      {
        title: 'Expense & Income Tracking',
        icon: <LineChart size={24} />,
        desc: 'Catalog all business expenses and revenue streams, attaching receipts and categorizing transactions.'
      },
      {
        title: 'Real-time Inventory Management',
        icon: <Settings size={24} />,
        desc: 'Track stock levels, get low-stock alerts, and auto-update inventory when invoices are generated.'
      },
      {
        title: 'GST & Tax Compliance',
        icon: <ShieldCheck size={24} />,
        desc: 'Auto-calculate GST, generate tax-ready summaries, and export reports for tax filings.'
      },
      {
        title: 'Dynamic Financial Reporting',
        icon: <LineChart size={24} />,
        desc: 'Generate instant Balance Sheets, Profit & Loss statements, Cash Flow summaries, and ledger reports.'
      },
      {
        title: 'Multi-User Collaboration',
        icon: <Users size={24} />,
        desc: 'Assign staff members specific roles like accountant, billing clerk, or viewer with secure permissions.'
      },
      {
        title: 'Purchase & Vendor Management',
        icon: <FolderOpen size={24} />,
        desc: 'Maintain vendor databases, track bills, payments due, and order history.'
      },
      {
        title: 'Customer Credit & Ledger',
        icon: <Users size={24} />,
        desc: 'Manage customer accounts, track credit (Udhaar), and send payment reminders.'
      },
      {
        title: 'Multi-Currency & Multi-Branch',
        icon: <Map size={24} />,
        desc: 'Manage multiple office locations and accept international currencies with live conversion rates.'
      }
    ],
    versions: [
      {
        id: 'retail_level',
        version: 'Small Business / Retail',
        label: 'Retail level',
        status: 'Available',
        description: 'Perfect for freelancers, independent service providers, and small local retail shops managing daily sales.',
        tiers: {
          Basic: {
            description: 'Perfect for small local businesses getting started with digital sales tracking.',
            whatsNew: [
              '📄 Unlimited Estimates: Create and share quick quotes.',
              '💵 Expense Tracker: Catalog daily expenses easily.',
              '👥 Customer Directory: Manage contact details and transactions.',
              '📊 Basic Sales Report: Track monthly revenue.',
              '📱 Mobile App Access: Manage accounts on-the-go.'
            ]
          },
          Pro: {
            description: 'Comprehensive billing and inventory tracking for growing local shops.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '🧾 GST Invoicing: Generate tax-compliant invoices.',
              '📦 Inventory Tracking: Manage stock levels for up to 500 items.',
              '🔔 Low Stock Alerts: Notifications when items run low.',
              '💳 Payment Reminders: Send automatic credit (Udhaar) warnings.',
              '👥 2 Staff Accounts: Shared access for billing staff.'
            ]
          },
          Advance: {
            description: 'Advanced accounting automation for established retail outlets.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '📊 Profit & Loss Statements: Detailed financial breakdowns.',
              '🏦 Bank Reconciliation: Sync and match bank transactions.',
              '📦 Unlimited Inventory: No item limits.',
              '👥 5 Staff Accounts: Multi-device sync for larger stores.',
              '⚡ Priority Support: Instant help whenever you need.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      {
        id: 'growth_level',
        version: 'Growth / Medium Enterprise',
        label: 'Wholesale level',
        status: 'Available',
        description: 'Comprehensive management tools for wholesale and distributing businesses with distinct departments, team members, and supply chain logistics.',
        tiers: {
          Basic: {
            description: 'Essential digital tools to manage inventory ledger and track basic metrics.',
            whatsNew: [
              '🧾 GST Invoicing: Create GST and e-way bills.',
              '📦 Purchase Order Tracking: Manage vendor transactions.',
              '👥 Vendor Database: Central record of all supply chains.',
              '📊 Stock Ledger Reports: Detailed inventory movements.'
            ]
          },
          Pro: {
            description: 'Advanced multi-user accounting for businesses with distinct departments.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '👥 10 Staff Accounts: Role-based permissions for accountants.',
              '🏦 Automated Bank Sync: Connect with local banking APIs.',
              '🚚 Delivery Challan Management: Document and track shipments.',
              '📊 Balance Sheet Generation: Complete year-end financial statements.',
              '💼 Multi-Currency Support: Handle international vendor payments.'
            ]
          },
          Advance: {
            description: 'Full enterprise resource planning for complex trading firms.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '📊 Batch & Expiry Tracking: Essential for pharma and food items.',
              '🏭 Manufacturing/BOM: Track raw material to finished product costs.',
              '👥 Unlimited Staff: Unlimited roles and accounts.',
              '📈 Business Intelligence: Advanced financial forecasting models.',
              '📞 On-Site Training: Personalized onboarding for your staff.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      },
      {
        id: 'corporate_level',
        version: 'Corporate / Enterprise',
        label: 'Corporate level',
        status: 'Available',
        description: 'High-scale command center for multi-branch organizations to consolidate financial statements, manage user directories, and sync with custom CRM setups.',
        tiers: {
          Basic: {
            description: 'Multi-branch consolidation tools for corporate offices.',
            whatsNew: [
              '🏢 Multi-Company Dashboard: Overview of all corporate entities.',
              '📊 Combined Financials: Consolidated P&L and Balance Sheet.',
              '🔐 Single Sign-On (SSO): Secure enterprise employee logins.'
            ]
          },
          Pro: {
            description: 'High-volume custom ERP setups for corporate enterprises.',
            whatsNew: [
              'Includes all Basic features, plus:',
              '🔗 API Integration: Link billing directly to your CRM/website.',
              '📋 Custom Document Templates: Brand estimates and invoices.',
              '🤝 Dedicated Accountant: Monthly audit reviews from partners.',
              '🛡️ Activity Trail: Auditable logs of every database change.'
            ]
          },
          Advance: {
            description: 'Custom cloud deployment and top-tier support for enterprises.',
            whatsNew: [
              'Includes all Pro features, plus:',
              '🌐 Custom Domain: Host accounting portal on your own domain.',
              '⚡ Dedicated Database: Isolated server space for performance.',
              '🔒 Custom Security Controls: IP whitelisting and restrictions.',
              '📞 24/7 SLA Support: Guarantee 99.9% uptime and instant response.'
            ]
          }
        },
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' },
          { icon: <Smartphone size={16} />, text: 'Mobile Responsive' }
        ]
      }
    ],
    stats: [
      { value: '10K+', label: 'Businesses Onboarded', icon: <Building2 size={24} /> },
      { value: '5M+', label: 'Invoices Generated', icon: <FileText size={24} /> },
      { value: '99.9%', label: 'Platform Uptime', icon: <ShieldCheck size={24} /> },
      { value: '4.8★', label: 'App Rating', icon: <Users size={24} /> }
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];
  
  const [activeVersion, setActiveVersion] = useState(product?.versions?.[0] || null);
  const [activeTier, setActiveTier] = useState('Advance');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div style={{ padding: '5rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', fontFamily: "'Playfair Display', serif" }}>Product not found</h2>
        <button 
          onClick={() => navigate('/#products')}
          style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
        >
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fafbfc', minHeight: '100vh', paddingBottom: '4rem', paddingTop: '1rem', fontFamily: "'Inter', sans-serif" }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        
        {/* Back Button - Absolute Positioned to align with Logo */}
        <div style={{ position: 'absolute', top: 0, right: '1.5rem', height: '64px', display: 'flex', alignItems: 'center', zIndex: 10 }}>
          <button 
            onClick={() => navigate('/#products')}
            style={{ 
              background: 'white', 
              border: '1px solid #e2e8f0', 
              padding: '0.5rem 1rem', 
              borderRadius: '999px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#0f172a',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
          >
            <ArrowLeft size={14} /> Back to Products
          </button>
        </div>

        {/* HERO SECTION */}
        <div className="product-detail-hero">
          
          {/* Hero Left */}
          <div>
            <div style={{ 
              background: '#2563eb', 
              color: 'white', 
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)'
            }}>
              {product.icon}
            </div>
            
            <h1 className="product-detail-title">
              {product.name}
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '90%' }}>
              {product.description}
            </p>
            
            {/* Tags/Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {product.tags.map((tag, i) => (
                <div key={i} style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  background: 'white', border: '1px solid #e2e8f0', 
                  padding: '0.4rem 0.8rem', borderRadius: '999px', 
                  fontSize: '0.8rem', fontWeight: '600', color: '#2563eb' 
                }}>
                  {tag.icon} <span style={{ color: '#475569' }}>{tag.text}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate(`/get-started?product=${product.name}`)}
                style={{
                  background: '#2563eb', color: 'white', border: 'none',
                  padding: '0.85rem 2rem', borderRadius: '999px',
                  fontSize: '0.95rem', fontWeight: '700',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Request Demo <ArrowRight size={16} />
              </button>
              <button 
                style={{
                  background: 'white', color: '#0f172a', border: '1px solid #e2e8f0',
                  padding: '0.85rem 2rem', borderRadius: '999px',
                  fontSize: '0.95rem', fontWeight: '700',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                Download Brochure <Download size={16} />
              </button>
            </div>
          </div>
          
          {/* Hero Right - Dashboard Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              background: 'white',
              borderRadius: '24px',
              padding: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
        </div>

        {/* KEY FUNCTIONALITIES */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#2563eb', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>KEY FUNCTIONALITIES</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '1rem' }}>Everything You Need, All in One Place</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Powerful features designed to streamline operations and deliver better civic services.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '6rem' 
        }}>
          {product.keyFunctionalities.map((feature, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2rem 1.5rem', 
              borderRadius: '16px',
              border: '1px solid #f1f5f9',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02)';
            }}
            >
              <div style={{ 
                width: '48px', height: '48px', 
                borderRadius: '12px', 
                background: '#f0f5ff', 
                color: '#2563eb', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VERSIONS & CHANGELOG */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#2563eb', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>VERSIONS</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '1rem' }}>Product Versions & Changelog</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            We continuously update our platform to deliver the best experience.
          </p>
        </div>

        <div className="product-versions-grid">
          {/* Versions Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {product.versions.map((ver, i) => (
              <button key={i} 
                onClick={() => setActiveVersion(ver)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: activeVersion?.id === ver.id ? '#2563eb' : 'white',
                  color: activeVersion?.id === ver.id ? 'white' : '#0f172a',
                  border: '1px solid',
                  borderColor: activeVersion?.id === ver.id ? '#2563eb' : '#e2e8f0',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  boxShadow: activeVersion?.id === ver.id ? '0 10px 15px -3px rgba(37, 99, 235, 0.2)' : '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                    {ver.version} 
                  </div>
                  {ver.label && (
                    <div style={{ fontSize: '0.7rem', fontWeight: '600', opacity: 0.9 }}>{ver.label}</div>
                  )}
                </div>
              </button>
            ))}
            <button style={{
              background: 'white', border: '1px solid #e2e8f0', padding: '1rem',
              borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#0f172a',
              marginTop: '0.5rem', cursor: 'pointer', transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              View All Releases
            </button>
          </div>

          {/* Version Details */}
          {activeVersion && (activeVersion.whatsNew || activeVersion.tiers) ? (
            <div className="product-version-details-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{activeVersion.version}</h3>
                     {activeVersion.label && <span style={{ background: '#f0f5ff', color: '#2563eb', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{activeVersion.label}</span>}
                  </div>
                  
                  {/* Premium Tier Tabs (Segmented Control) */}
                  <div style={{ 
                    display: 'inline-flex', 
                    background: '#f1f5f9', 
                    padding: '0.35rem', 
                    borderRadius: '12px', 
                    gap: '0.25rem', 
                    marginTop: '1.25rem',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                  }}>
                    {['Basic', 'Pro', 'Advance'].map(tier => (
                      <button 
                        key={tier}
                        onClick={() => setActiveTier(tier)}
                        style={{
                          background: activeTier === tier ? 'white' : 'transparent',
                           color: activeTier === tier ? '#2563eb' : '#64748b',
                           border: '1px solid',
                           borderColor: activeTier === tier ? 'rgba(0,0,0,0.05)' : 'transparent',
                          padding: '0.5rem 1.75rem',
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: activeTier === tier ? '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' : 'none'
                        }}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
                <span style={{ background: '#ecfdf5', color: '#10b981', fontSize: '0.8rem', fontWeight: '700', padding: '0.4rem 0.8rem', borderRadius: '999px' }}>{activeVersion.status}</span>
              </div>
              
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                {activeVersion.tiers ? activeVersion.tiers[activeTier]?.description : activeVersion.description}
              </p>
              
              <div className="product-version-details-row">
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.25rem' }}>{activeVersion.tiers ? 'Plan Features' : "What's New"}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(activeVersion.tiers ? activeVersion.tiers[activeTier]?.whatsNew : activeVersion.whatsNew)?.map((item, idx) => {
                      const cleanedItem = item.replace(/\p{Extended_Pictographic}\uFE0F?/gu, '').trim();
                      return (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
                          <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                          <span>{cleanedItem}</span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginTop: '2.5rem', marginBottom: '1.25rem' }}>Compatibility</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {activeVersion.compatibility.map((comp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#334155' }}>
                        {comp.icon} {comp.text}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Illustration Block representing the missing asset */}
                <div className="product-version-illustration" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '200px', height: '160px', background: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#94a3b8' }}>
                      <LineChart size={48} strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>Analytics Dashboard</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ) : (
             <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
               <p>Detailed changelog for {activeVersion?.version} is currently unavailable.</p>
             </div>
          )}
        </div>

        {/* TRUST & IMPACT */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#2563eb', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>TRUST & IMPACT</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '2rem' }}>Trusted by Cities, Loved by Citizens</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '3rem 0' }}>
            {product.stats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#f0f5ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="cta-banner-wrapper">
          {/* Subtle pattern overlay */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={40} />
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Ready to Transform Civic Management?</h2>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', margin: 0 }}>Join 50+ cities already using {product.name} to deliver better services to their citizens.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <button 
              onClick={() => navigate(`/get-started?product=${product.name}`)}
              style={{
                background: '#2563eb', color: 'white', border: 'none',
                padding: '0.85rem 2rem', borderRadius: '8px',
                fontSize: '1rem', fontWeight: '700',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer', transition: 'transform 0.2s',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Request Demo <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.85rem 2rem', borderRadius: '8px',
                fontSize: '1rem', fontWeight: '600',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer', transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Contact Sales <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
