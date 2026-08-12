# E-commerce QA Scenario Library

A validated, interactive QA learning and portfolio application that translates cloud architecture concepts into practical **e-commerce quality engineering scenarios, multi-cloud service mappings, business risks, and test strategies**.

**Release:** V1.0  
**Status:** Validated Portfolio/Demo Application  
**QA Acceptance:** 14/14 PASS  
**Regression:** 8/8 PASS  
**Release-Blocking Defects:** 0

**Live Demo:** https://vivaciousdove.github.io/ecommerce-qa-scenario-library/

---

## Overview

The E-commerce QA Scenario Library demonstrates how a QA engineer can move beyond simply executing test cases and evaluate software systems from an architecture, reliability, customer-impact, and business-risk perspective.

The application connects each architecture capability across five perspectives:

1. AWS
2. Azure
3. Google Cloud
4. Football analogy
5. Wireless/network engineering analogy

Each capability is then translated into:

- E-commerce QA responsibilities
- Executable QA test scenarios
- Why the capability matters
- Business risk if the capability fails

The goal is to demonstrate the connection between:

**Cloud Architecture → System Behavior → QA Validation → Customer Impact → Business Risk**

---

# Problem Statement

Cloud services are often learned as isolated product names:

- Amazon S3
- Azure Blob Storage
- Google Cloud Storage
- Amazon CloudWatch
- Azure Monitor
- Google Cloud Monitoring

Knowing service names alone does not demonstrate systems understanding.

A QA engineer also needs to understand:

- What problem does the capability solve?
- How should the system behave?
- How could it fail?
- How would QA test it?
- What customer experience could be affected?
- What business risk would remain?

This project was built to make those relationships explicit.

---

# Architecture Capabilities

V1.0 contains 11 architecture capabilities.

| Capability                    | AWS                     | Azure                                        | Google Cloud                |
| ----------------------------- | ----------------------- | -------------------------------------------- | --------------------------- |
| Auto Scaling                  | Amazon EC2 Auto Scaling | Virtual Machine Scale Sets                   | Managed Instance Groups     |
| Cache                         | Amazon ElastiCache      | Azure Managed Redis                          | Memorystore                 |
| CDN                           | Amazon CloudFront       | Azure Front Door                             | Google Cloud CDN            |
| DNS                           | Amazon Route 53         | Azure DNS                                    | Google Cloud DNS            |
| Load Balancing                | Elastic Load Balancing  | Azure Load Balancer / Application Gateway    | Google Cloud Load Balancing |
| Message Queue                 | Amazon SQS              | Azure Service Bus                            | Google Cloud Pub/Sub\*      |
| Monitoring                    | Amazon CloudWatch       | Azure Monitor                                | Cloud Monitoring            |
| Event Notifications / Pub-Sub | Amazon SNS              | Azure Event Grid                             | Google Cloud Pub/Sub        |
| Object Storage                | Amazon S3               | Azure Blob Storage                           | Google Cloud Storage        |
| Relational Database           | Amazon RDS              | Azure SQL Database / Azure Database services | Google Cloud SQL            |
| Web Firewall                  | AWS WAF                 | Azure Web Application Firewall               | Google Cloud Armor          |

\*Pub/Sub is represented as a topic/subscription-based asynchronous messaging capability and should not be interpreted as a feature-for-feature equivalent of Amazon SQS.

---

# Example: Load Balancing

The Load Balancing scenario demonstrates how one architecture capability can be viewed from several engineering perspectives.

## Cloud Architecture

### AWS

- Layer 4 — Network Load Balancer
- Layer 7 — Application Load Balancer

### Azure

- Layer 4 — Azure Load Balancer
- Layer 7 — Azure Application Gateway

### Google Cloud

- Layer 4 — Network Load Balancer
- Layer 7 — Application Load Balancer

---

## Football Analogy

A quarterback distributes work among available receivers instead of repeatedly targeting one player.

The concept represents:

**Incoming Workload → Distribution Decision → Available Targets**

---

## Wireless Analogy

Network traffic is distributed across available resources so that one resource does not become overloaded while others remain underutilized.

---

## E-commerce QA Perspective

QA validates that customer traffic reaches healthy application instances and that service remains available when an individual target becomes unhealthy.

A representative test flow is:

1. Establish multiple healthy application targets.
2. Send storefront traffic through the load balancer.
3. Verify successful requests.
4. Make one target unhealthy.
5. Verify traffic stops reaching the unhealthy target.
6. Continue customer requests.
7. Verify healthy targets maintain availability.
8. Restore the target.
9. Verify the target returns after becoming healthy.

---

## Business Risk

Incorrect load-balancing behavior can contribute to:

- Storefront outages
- Failed customer sessions
- Server overload
- Checkout interruption
- Lost sales

This demonstrates the project's central QA model:

**Technical Behavior → Customer Impact → Business Risk**

---

# QA Strategy

The project was validated using a controlled QA lifecycle rather than informal browser checks.

The lifecycle included:

**Requirements**  
→ **Architecture**  
→ **Test Planning**  
→ **Implementation**  
→ **Smoke Testing**  
→ **Acceptance Testing**  
→ **Technical Accuracy Audit**  
→ **Finding Identification**  
→ **Remediation**  
→ **Targeted Regression**  
→ **Residual Risk Assessment**  
→ **Release Recommendation**

---

# Acceptance Results

V1.0 completed the defined acceptance suite successfully.

| Metric                       | Result |
| ---------------------------- | -----: |
| Acceptance Tests Planned     |     14 |
| Acceptance Tests Executed    |     14 |
| Acceptance Tests Passed      |     14 |
| Acceptance Tests Failed      |      0 |
| Scenario Completeness Checks |    110 |
| Scenario Completeness Passed |    110 |
| Accuracy Findings Identified |      6 |
| Accuracy Findings Remediated |      6 |
| Targeted Regression Checks   |      8 |
| Targeted Regression Passed   |      8 |
| Release-Blocking Defects     |      0 |
| Future Observations          |     14 |

**Final QA Recommendation: GO**

---

# Technical Accuracy Audit

Scenario completeness and technical accuracy were intentionally tested separately.

A scenario can contain every required field and still contain inaccurate or misleading technical information.

The technical accuracy audit reviewed all 11 capabilities for:

- Cloud-service mapping accuracy
- Cross-cloud equivalence assumptions
- Architecture terminology
- Football analogy accuracy
- Wireless analogy accuracy
- E-commerce QA relevance
- QA scenario validity
- Customer impact
- Business risk

Six technical-content findings were discovered.

All six were corrected and regression-tested before V1.0 acceptance.

---

# Remediated Findings

## FIND-001 — CDN Azure Terminology

Updated the Azure CDN capability mapping to:

**Azure Front Door**

---

## FIND-002 — Load Balancing Layer Clarification

Added explicit distinction between:

- Layer 4 network/connection load balancing
- Layer 7 application-aware load balancing

---

## FIND-003 — Google Cloud Pub/Sub Qualification

Clarified that Google Cloud Pub/Sub represents:

**Topic/subscription-based asynchronous messaging**

rather than implying direct feature equivalence with Amazon SQS.

---

## FIND-004 — Notifications Capability Name

Renamed:

**Notifications**

to:

**Event Notifications / Pub-Sub**

---

## FIND-005 — Azure Event Mapping

Refined the Azure event-notification mapping to:

**Azure Event Grid**

Azure Service Bus remains represented under Message Queue.

---

## FIND-006 — Azure Relational Database Terminology

Refined the Azure relational database mapping to distinguish:

- Azure SQL Database
- Azure Database services for PostgreSQL/MySQL workloads

---

# Regression Testing

After all six findings were remediated, targeted regression testing was executed.

| Regression ID | Validation                    | Result |
| ------------- | ----------------------------- | ------ |
| RTR-001       | CDN                           | PASS   |
| RTR-002       | Load Balancing                | PASS   |
| RTR-003       | Message Queue                 | PASS   |
| RTR-004       | Event Notifications / Pub-Sub | PASS   |
| RTR-005       | Relational Database           | PASS   |
| RTR-006       | Reset Functionality           | PASS   |
| RTR-007       | Scenario Completeness         | PASS   |
| RTR-008       | Browser Console               | PASS   |

**Regression Result: 8/8 PASS**

---

# QA Risk Model

The project emphasizes that senior QA engineering is not limited to identifying whether software passed or failed.

For each capability, the application encourages evaluation of four questions:

### Why does it matter?

What customer, system, or operational behavior depends on this capability?

### What decision should be made?

Should the release proceed, be blocked, require remediation, or require additional evidence?

### What risk remains?

What uncertainty or failure condition remains after testing?

### How can uncertainty be reduced?

What additional testing, monitoring, evidence, or controls would increase confidence?

This allows QA evidence to support engineering and business decisions rather than simply report test counts.

---

# Example Failure Analysis

Consider a checkout problem.

A basic QA report might state:

> Checkout test failed.

A systems-oriented QA investigation asks:

- Is DNS resolving correctly?
- Is traffic reaching the load balancer?
- Are healthy application targets available?
- Is the cache returning stale data?
- Is the database transaction consistent?
- Was an asynchronous message lost or duplicated?
- Did monitoring detect the failure?
- Did the WAF incorrectly block legitimate traffic?

This transforms testing from isolated UI validation into system-level quality engineering.

---

# Technology

V1.0 intentionally uses a lightweight technology stack.

## Front End

- HTML5
- CSS3
- JavaScript

## Development

- Visual Studio Code
- Git
- GitHub

## QA

- Manual functional testing
- Acceptance testing
- Technical accuracy testing
- Regression testing
- Browser DevTools
- Risk-based validation

## Cloud Architecture Domains

- AWS
- Microsoft Azure
- Google Cloud

---

# Repository Structure

```text
ecommerce-qa-scenario-library/
│
├── README.md
├── .gitignore
├── index.html
├── styles.css
├── script.js
│
└── docs/
    ├── requirements.md
    ├── architecture.md
    ├── test-plan.md
    └── acceptance-results.md
```
