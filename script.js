/* =========================================================
   E-COMMERCE QA SCENARIO LIBRARY
   V1.0 MVP

   Responsibilities:
   - Store scenario data
   - Read capability selections
   - Find the correct scenario
   - Render scenario content
   - Render test steps
   - Handle Reset
   - Fail safely when data is unavailable
   ========================================================= */


/* =========================================================
   1. SCENARIO LIBRARY
   ========================================================= */

const scenarios = {

  /* ---------------------------------------------------------
     AUTO SCALING
     --------------------------------------------------------- */
  autoScaling: {
    capability: "Auto Scaling",

    aws: "Amazon EC2 Auto Scaling",

    football:
      "When workload increases, additional personnel are brought in so the existing players are not overwhelmed.",

    wireless:
      "Additional network capacity is introduced when subscriber demand approaches or exceeds the capacity of existing resources.",

    ecommerceQA:
      "Validate that application capacity increases during traffic spikes without disrupting browsing, cart, checkout, or payment workflows.",

    azure:
      "Azure Virtual Machine Scale Sets",

    gcp:
      "Google Cloud Managed Instance Groups",

    testScenario: [
      "Establish a normal traffic baseline.",
      "Increase simulated customer traffic toward the projected peak.",
      "Monitor application response time, error rate, and infrastructure utilization.",
      "Verify additional application capacity is introduced when configured thresholds are reached.",
      "Verify new resources become healthy and begin serving traffic.",
      "Continue traffic through the expected peak period.",
      "Verify checkout, payment, inventory, and order processing remain within defined acceptance criteria.",
      "Reduce traffic and verify unnecessary capacity can scale back appropriately."
    ],

    whyItMatters:
      "Flash sales and promotions can create sudden demand increases. Capacity must respond quickly enough to prevent customer-facing degradation.",

    businessRisk:
      "Slow pages, failed checkouts, abandoned carts, payment failures, and lost revenue during peak demand."
  },


  /* ---------------------------------------------------------
     CACHE
     --------------------------------------------------------- */
  cache: {
    capability: "Cache",

    aws: "Amazon ElastiCache",

    football:
      "A coach keeps frequently used plays immediately available instead of searching the entire playbook before every snap.",

    wireless:
      "Frequently requested data is kept closer to the consuming system so repeated requests do not always require slower downstream retrieval.",

    ecommerceQA:
      "Validate that frequently requested product or session data can be served quickly while changes to source data eventually appear correctly.",

    azure:
      "Azure Managed Redis",

    gcp:
      "Google Cloud Memorystore",

    testScenario: [
      "Select a frequently viewed product or data set.",
      "Measure the initial response behavior.",
      "Repeat the same request several times.",
      "Verify repeated requests remain responsive.",
      "Modify the underlying source data.",
      "Verify stale cached content does not remain longer than the defined caching policy allows.",
      "Verify the application still returns correct data if the cache becomes unavailable.",
      "Check logs or monitoring for unexpected cache errors."
    ],

    whyItMatters:
      "Caching can improve performance and reduce database workload, but stale or unavailable cache data can create incorrect customer experiences.",

    businessRisk:
      "Slow storefront performance, stale prices or inventory, unnecessary database load, and inconsistent customer information."
  },


  /* ---------------------------------------------------------
     CDN
     --------------------------------------------------------- */
  cdn: {
    capability: "CDN",

    aws: "Amazon CloudFront",

    football:
      "Team merchandise is distributed to local stadium stores so fans do not have to wait for every item to be shipped from headquarters.",

    wireless:
      "Content is delivered from locations closer to subscribers, reducing the distance and latency required to retrieve commonly requested data.",

    ecommerceQA:
      "Validate that static storefront content such as product images, scripts, and styles load correctly and efficiently for geographically distributed customers.",

    azure:
      "Azure Front Door",

    gcp:
      "Google Cloud CDN",

    testScenario: [
      "Identify representative static storefront assets.",
      "Load the storefront from the primary test location.",
      "Verify images, CSS, JavaScript, and other static assets load successfully.",
      "Repeat requests and observe caching behavior where measurable.",
      "Test from an alternate geographic test location when available.",
      "Update or invalidate a test asset.",
      "Verify customers receive the updated asset according to the expected cache policy.",
      "Confirm failed or missing CDN content does not make critical storefront workflows unusable."
    ],

    whyItMatters:
      "Customers expect product pages and storefront content to load quickly regardless of geographic location.",

    businessRisk:
      "Slow page loads, missing product imagery, inconsistent content, reduced conversion, and abandoned shopping sessions."
  },


  /* ---------------------------------------------------------
     DNS
     --------------------------------------------------------- */
  dns: {
    capability: "DNS",

    aws: "Amazon Route 53",

    football:
      "A stadium directory tells fans which entrance or section they need to reach instead of making them search the entire facility.",

    wireless:
      "A service name is resolved to the correct network destination so devices and applications know where requests should be sent.",

    ecommerceQA:
      "Verify that the storefront domain resolves to the correct application endpoint and that customers can reach the intended environment.",

    azure:
      "Azure DNS",

    gcp:
      "Google Cloud DNS",

    testScenario: [
      "Identify the storefront domain under test.",
      "Resolve the domain using the expected DNS configuration.",
      "Verify the returned destination is correct.",
      "Open the storefront using the public domain name.",
      "Verify the correct application environment loads.",
      "Test expected redirects such as HTTP to HTTPS or alternate hostnames where applicable.",
      "Verify an intentionally incorrect or unavailable DNS record produces an understood failure condition.",
      "Confirm recovery after the correct DNS configuration is restored."
    ],

    whyItMatters:
      "Customers cannot use an application they cannot locate. DNS is part of the path between a customer request and the storefront.",

    businessRisk:
      "Complete storefront outage, customers reaching the wrong environment, failed transactions, and immediate revenue loss."
  },


  /* ---------------------------------------------------------
     LOAD BALANCING
     --------------------------------------------------------- */
  loadBalancing: {
    capability: "Load Balancing",

    aws: "Elastic Load Balancing (L4: Network Load Balancer / L7: Application Load Balancer)",

    football:
      "A quarterback distributes the workload among available receivers instead of sending every play to the same player.",

    wireless:
      "Traffic is distributed across available network or application resources so a single resource does not become unnecessarily overloaded.",

    ecommerceQA:
      "Verify customer traffic reaches healthy application instances and service remains available when an individual target becomes unhealthy.",

    azure:
      "L4: Azure Load Balancer / L7: Azure Application Gateway",

    gcp:
      "L4: Google Cloud Network Load Balancer / L7: Google Cloud Application Load Balancer",

    testScenario: [
      "Confirm multiple healthy application targets are available.",
      "Send representative storefront traffic through the load balancer.",
      "Verify requests are successfully served.",
      "Make one target unavailable or unhealthy in the approved test environment.",
      "Verify the unhealthy target is removed from active traffic handling.",
      "Continue customer requests during the failure.",
      "Verify the application remains available through healthy targets.",
      "Restore the failed target and verify it returns to service only after becoming healthy."
    ],

    whyItMatters:
      "Traffic distribution and health checks help prevent a single failed application instance from becoming a customer-visible outage.",

    businessRisk:
      "Storefront outages, failed sessions, overloaded servers, checkout interruptions, and lost sales."
  },


  /* ---------------------------------------------------------
     MESSAGE QUEUE
     --------------------------------------------------------- */
  messageQueue: {
    capability: "Message Queue",

    aws: "Amazon Simple Queue Service (SQS)",

    football:
      "Players wait in an organized line for a drill until the coach or station is ready to process the next participant.",

    wireless:
      "Events wait for downstream processing so temporary congestion or processor unavailability does not automatically cause the event to disappear.",

    ecommerceQA:
      "Verify customer orders or events survive temporary downstream processor outages without being lost or incorrectly duplicated.",

    azure:
      "Azure Service Bus",

    gcp:
      "Google Cloud Pub/Sub (topic/subscription-based asynchronous messaging)",

    testScenario: [
      "Submit a customer order or representative application event.",
      "Interrupt or simulate failure of the downstream consumer.",
      "Verify the event remains available for later processing.",
      "Restore the downstream consumer.",
      "Verify processing resumes.",
      "Verify the event is processed successfully.",
      "Verify the customer order is not lost.",
      "Verify recovery does not create an incorrect duplicate order or payment."
    ],

    whyItMatters:
      "Downstream services can fail temporarily. A customer transaction already accepted by the storefront must not silently disappear because another component is unavailable.",

    businessRisk:
      "Lost orders, duplicate orders, delayed fulfillment, incorrect payments, customer complaints, and revenue leakage."
  },


  /* ---------------------------------------------------------
     MONITORING
     --------------------------------------------------------- */
  monitoring: {
    capability: "Monitoring",

    aws: "Amazon CloudWatch",

    football:
      "Coaches continuously watch the scoreboard, play statistics, injuries, and game conditions so they can react when performance changes.",

    wireless:
      "Operations teams monitor KPIs, alarms, utilization, latency, failures, and service health to detect degradation before it becomes widespread.",

    ecommerceQA:
      "Verify that important application and infrastructure failures generate observable metrics, logs, or alarms that support troubleshooting and release decisions.",

    azure:
      "Azure Monitor",

    gcp:
      "Google Cloud Monitoring",

    testScenario: [
      "Identify a monitored application KPI such as error rate or response latency.",
      "Establish normal baseline behavior.",
      "Generate an approved condition that exceeds the defined threshold.",
      "Verify the metric reflects the changed behavior.",
      "Verify the expected alarm or alert condition is generated.",
      "Inspect supporting logs or telemetry.",
      "Restore normal behavior.",
      "Verify monitoring reflects recovery.",
      "Confirm the captured evidence is sufficient to support troubleshooting."
    ],

    whyItMatters:
      "A failure that cannot be observed is harder to detect, diagnose, and communicate. Monitoring reduces uncertainty during incidents and releases.",

    businessRisk:
      "Undetected outages, prolonged incidents, slow root-cause analysis, missed checkout failures, and increased customer impact."
  },


  /* ---------------------------------------------------------
     NOTIFICATIONS
     --------------------------------------------------------- */
  notifications: {
    capability: "Event Notifications / Pub-Sub",

    aws: "Amazon Simple Notification Service (SNS)",

    football:
      "A stadium public-address system broadcasts one announcement to many listeners who need the same information.",

    wireless:
      "A network event or alarm is distributed to multiple operational consumers that need to react to the same condition.",

    ecommerceQA:
      "Verify that an important commerce event can trigger the required downstream notifications or workflows without creating unintended duplicates.",

    azure:
      "Azure Event Grid",

    gcp:
      "Google Cloud Pub/Sub",

    testScenario: [
      "Trigger a representative event such as successful order completion.",
      "Verify the event is published.",
      "Verify each expected subscriber or downstream workflow receives the event.",
      "Validate expected actions such as email, fulfillment, inventory, or operational processing.",
      "Verify one subscriber failure does not incorrectly prevent unrelated subscribers from receiving the event where architecture permits.",
      "Repeat the event and verify duplicate handling follows the defined requirements.",
      "Inspect logs or event evidence for failures."
    ],

    whyItMatters:
      "A single business event may need to inform several downstream systems. Missing or duplicate notifications can create inconsistent business processes.",

    businessRisk:
      "Missing confirmations, fulfillment delays, inventory inconsistencies, duplicate communications, and disconnected downstream workflows."
  },


  /* ---------------------------------------------------------
     OBJECT STORAGE
     --------------------------------------------------------- */
  objectStorage: {
    capability: "Object Storage",

    aws: "Amazon Simple Storage Service (S3)",

    football:
      "An equipment warehouse stores large numbers of independent items such as uniforms, footballs, records, and media until they are needed.",

    wireless:
      "Logs, traces, exports, configuration files, and other large data objects can be retained independently from transactional application processing.",

    ecommerceQA:
      "Validate that product images, generated reports, receipts, exports, and test artifacts can be stored and retrieved correctly with appropriate access controls.",

    azure:
      "Azure Blob Storage",

    gcp:
      "Google Cloud Storage",

    testScenario: [
      "Upload a representative object such as a product image or test artifact.",
      "Verify the upload succeeds.",
      "Retrieve the object using the expected application path.",
      "Verify the retrieved content matches the original.",
      "Attempt an unauthorized access path where appropriate.",
      "Verify access controls behave according to requirements.",
      "Replace or version the object where supported by the design.",
      "Verify the application displays or retrieves the intended version.",
      "Delete the test object according to cleanup requirements."
    ],

    whyItMatters:
      "E-commerce applications depend on large volumes of static and generated content that must remain durable, retrievable, and appropriately protected.",

    businessRisk:
      "Missing product images, inaccessible receipts, data exposure, broken downloads, and loss of important business or test artifacts."
  },


  /* ---------------------------------------------------------
     RELATIONAL DATABASE
     --------------------------------------------------------- */
  relationalDatabase: {
    capability: "Relational Database",

    aws: "Amazon Relational Database Service (RDS)",

    football:
      "The official team record book keeps structured records such as players, games, statistics, and results with defined relationships.",

    wireless:
      "Structured subscriber, configuration, operational, or transaction records are stored with relationships that must remain consistent.",

    ecommerceQA:
      "Validate that customers, products, orders, payments, and inventory records are stored accurately and remain consistent across related transactions.",

    azure:
      "Azure SQL Database (and Azure Database services for PostgreSQL/MySQL workloads)",

    gcp:
      "Google Cloud SQL",

    testScenario: [
      "Create or select a representative customer and product.",
      "Place an order through the application.",
      "Verify the expected order record is created.",
      "Verify the correct customer is associated with the order.",
      "Verify ordered products and quantities are accurate.",
      "Verify payment status is recorded correctly.",
      "Verify inventory changes match the completed transaction.",
      "Cancel or modify the order when supported.",
      "Verify related database records remain consistent after the change."
    ],

    whyItMatters:
      "Transactional data is the system of record for many critical commerce processes. Incorrect relationships or updates can create widespread business inconsistencies.",

    businessRisk:
      "Incorrect orders, payment discrepancies, inventory errors, customer-data inconsistencies, reporting errors, and financial reconciliation problems."
  },


  /* ---------------------------------------------------------
     WEB FIREWALL
     --------------------------------------------------------- */
  webFirewall: {
    capability: "Web Firewall",

    aws: "AWS Web Application Firewall (AWS WAF)",

    football:
      "The offensive line blocks dangerous pressure before it reaches the quarterback while allowing legitimate plays to continue.",

    wireless:
      "Security controls inspect and restrict unwanted traffic before it reaches protected applications or management services.",

    ecommerceQA:
      "Validate that malicious web requests are blocked while legitimate browsing, login, cart, and checkout traffic continues to function.",

    azure:
      "Azure Web Application Firewall",

    gcp:
      "Google Cloud Armor",

    testScenario: [
      "Confirm normal storefront requests are allowed.",
      "Execute approved security test requests that match configured protection rules.",
      "Verify malicious or disallowed requests are blocked.",
      "Verify the blocked request does not reach the protected application workflow.",
      "Verify legitimate requests continue to succeed.",
      "Inspect security logs or monitoring evidence.",
      "Verify protections do not incorrectly block normal customer traffic.",
      "Document any false positive or false negative behavior."
    ],

    whyItMatters:
      "Security controls must reduce malicious traffic without preventing legitimate customers from using the storefront.",

    businessRisk:
      "Account compromise, data exposure, application attacks, checkout disruption, false-positive customer blocking, and reputational damage."
  }
};


/* =========================================================
   2. DOM REFERENCES

   Humanized:
   JavaScript finds the HTML elements it needs to control.
   ========================================================= */

const capabilitySelect =
  document.getElementById("capabilitySelect");

const resetButton =
  document.getElementById("resetButton");

const initialState =
  document.getElementById("initialState");

const scenarioSection =
  document.getElementById("scenarioSection");

const capabilityName =
  document.getElementById("capabilityName");

const awsValue =
  document.getElementById("awsValue");

const azureValue =
  document.getElementById("azureValue");

const gcpValue =
  document.getElementById("gcpValue");

const footballValue =
  document.getElementById("footballValue");

const wirelessValue =
  document.getElementById("wirelessValue");

const ecommerceQAValue =
  document.getElementById("ecommerceQAValue");

const testScenarioList =
  document.getElementById("testScenarioList");

const whyItMattersValue =
  document.getElementById("whyItMattersValue");

const businessRiskValue =
  document.getElementById("businessRiskValue");


/* =========================================================
   3. REQUIRED SCENARIO FIELDS

   Used for defensive validation so incomplete scenario
   records do not silently render bad data.
   ========================================================= */

const requiredScenarioFields = [
  "capability",
  "aws",
  "football",
  "wireless",
  "ecommerceQA",
  "azure",
  "gcp",
  "testScenario",
  "whyItMatters",
  "businessRisk"
];


/* =========================================================
   4. GET SELECTED SCENARIO
   ========================================================= */

function getSelectedScenario() {

  const selectedKey =
    capabilitySelect.value;

  if (!selectedKey) {
    return null;
  }

  return scenarios[selectedKey] || null;
}


/* =========================================================
   5. VALIDATE SCENARIO RECORD

   Returns true only when all required fields exist.
   ========================================================= */

function isScenarioComplete(scenario) {

  if (!scenario) {
    return false;
  }

  const hasAllFields =
    requiredScenarioFields.every((field) => {

      const value =
        scenario[field];

      if (field === "testScenario") {

        return (
          Array.isArray(value) &&
          value.length > 0 &&
          value.every(
            (step) =>
              typeof step === "string" &&
              step.trim() !== ""
          )
        );
      }

      return (
        typeof value === "string" &&
        value.trim() !== ""
      );
    });

  return hasAllFields;
}


/* =========================================================
   6. RENDER TEST STEPS
   ========================================================= */

function renderTestScenario(steps) {

  testScenarioList.innerHTML = "";

  steps.forEach((step) => {

    const listItem =
      document.createElement("li");

    listItem.textContent =
      step;

    testScenarioList.appendChild(
      listItem
    );
  });
}


/* =========================================================
   7. RENDER SCENARIO
   ========================================================= */

function renderScenario(scenario) {

  if (!isScenarioComplete(scenario)) {

    showSafeErrorState();

    return;
  }

  capabilityName.textContent =
    scenario.capability;

  awsValue.textContent =
    scenario.aws;

  azureValue.textContent =
    scenario.azure;

  gcpValue.textContent =
    scenario.gcp;

  footballValue.textContent =
    scenario.football;

  wirelessValue.textContent =
    scenario.wireless;

  ecommerceQAValue.textContent =
    scenario.ecommerceQA;

  whyItMattersValue.textContent =
    scenario.whyItMatters;

  businessRiskValue.textContent =
    scenario.businessRisk;

  renderTestScenario(
    scenario.testScenario
  );

  initialState.hidden =
    true;

  scenarioSection.hidden =
    false;
}


/* =========================================================
   8. CAPABILITY CHANGE HANDLER
   ========================================================= */

function handleCapabilityChange() {

  const scenario =
    getSelectedScenario();

  if (!scenario) {

    resetApplication();

    return;
  }

  renderScenario(
    scenario
  );
}


/* =========================================================
   9. SAFE ERROR STATE

   Prevents undefined, null, or incomplete scenario data
   from being shown directly to the user.
   ========================================================= */

function showSafeErrorState() {

  clearScenarioDisplay();

  scenarioSection.hidden =
    true;

  initialState.hidden =
    false;

  const heading =
    initialState.querySelector("h2");

  const message =
    initialState.querySelector("p");

  heading.textContent =
    "Scenario Unavailable";

  message.textContent =
    "The selected scenario could not be displayed because required scenario information is unavailable.";
}


/* =========================================================
   10. CLEAR SCENARIO DISPLAY
   ========================================================= */

function clearScenarioDisplay() {

  capabilityName.textContent = "";

  awsValue.textContent = "";

  azureValue.textContent = "";

  gcpValue.textContent = "";

  footballValue.textContent = "";

  wirelessValue.textContent = "";

  ecommerceQAValue.textContent = "";

  whyItMattersValue.textContent = "";

  businessRiskValue.textContent = "";

  testScenarioList.innerHTML = "";
}


/* =========================================================
   11. RESET APPLICATION
   ========================================================= */

function resetApplication() {

  capabilitySelect.value = "";

  clearScenarioDisplay();

  scenarioSection.hidden =
    true;

  initialState.hidden =
    false;

  const heading =
    initialState.querySelector("h2");

  const message =
    initialState.querySelector("p");

  heading.textContent =
    "Scenario Ready";

  message.textContent =
    "Select a capability above to display its AWS, Azure, and Google Cloud mappings, football and wireless analogies, e-commerce QA example, test scenario, business impact, and risk.";
}


/* =========================================================
   12. EVENT LISTENERS

   Humanized:
   Tell JavaScript which function to run when the user
   interacts with the page.
   ========================================================= */

capabilitySelect.addEventListener(
  "change",
  handleCapabilityChange
);

resetButton.addEventListener(
  "click",
  resetApplication
);


/* =========================================================
   13. INITIAL APPLICATION STATE
   ========================================================= */

resetApplication();