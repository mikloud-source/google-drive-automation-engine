<div align="center">
  <h1>🚀 Google Drive Layered-Filtering Automation Engine</h1>
  <p><i>Cloud-Based Data Architecture & Workflow Automation Built on Google Apps Script (GAS) & Python</i></p>
</div>

<hr />

## 📖 Background & Philosophy
This project adopts the **Single Point of Entry** concept. Inspired by real-world space management—like tossing all laundry into a single main hamper and letting a smart butler automatically wash, sort, and return each item to its specific wardrobe shelf. 

In this architecture, the user only needs to throw any file from a mobile phone or other device into a single designated folder named `&lt;FOLDER_TRANSIT&gt;`. The automation engine then runs silently in the cloud background to scan, sanitize, and secure these digital assets into the correct storage drawers without any manual intervention.

---

## 🏛️ Layered-Filtering Architecture
To ensure high precision, minimize cognitive load, and completely eliminate the risk of data loss, this automation engine applies a 3-layer cognitive filtration framework:

<table>
  <thead>
    <tr>
      <th>🛡️ Filtration Layer</th>
      <th>🔍 Component Inspected</th>
      <th>📁 Target Folder Destination</th>
      <th>⚡ Automation Logic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Layer 1: Keyword Filter</b></td>
      <td>Substring matches in file name</td>
      <td><code>&lt;FOLDER_SPECIFIC&gt;</code></td>
      <td>Matches the file name string against an indexed dictionary (e.g., words like <i>"certificate"</i>, <i>"finance"</i>, or <i>"vpn"</i>).</td>
    </tr>
    <tr>
      <td><b>Layer 2: Media Sieve</b></td>
      <td>Multimedia file extensions</td>
      <td><code>&lt;FOLDER_MEDIA_ARCHIVE&gt;</code></td>
      <td>Sweeps random images/videos that lack specific keywords (e.g., <code>.jpg</code>, <code>.png</code>, <code>.mp4</code>, <code>.gif</code> formats).</td>
    </tr>
    <tr>
      <td><b>Layer 3: Document Sieve</b></td>
      <td>General document extensions</td>
      <td><code>&lt;FOLDER_DATA_ANALYSIS&gt;</code></td>
      <td>Secures random text files or PDFs that lack identity keywords so they never get misplaced.</td>
    </tr>
  </tbody>
</table>

---

## 🛠️ Engineering Workflow & Development Phases

<details>
<summary><b>Phase 1: Modeling & Filename Sanitization Simulation (Python)</b></summary>
<p>Before deploying to the cloud ecosystem, the string manipulation logic was thoroughly simulated and tested locally using <b>Python</b>. This phase focused on validating file renaming behavior—converting irregular spaces and hyphens into standardized underscores (<code>_</code>) and injecting dynamic timestamps (<code>_yyyy_MM_dd</code>) to ensure seamless compatibility with database system integrity.</p>
</details>

<details>
<summary><b>Phase 2: Automation & Serverless Cloud Deployment (JavaScript / GAS)</b></summary>
<p>Once the naming logic was fully validated, the architecture transitioned directly to <b>Google Apps Script</b> using JavaScript. In this phase, the script was fully integrated with native Google Drive API components, equipped with network interruption fail-safe mechanisms, and attached to time-driven triggers executing automatically 24/7 on Google's cloud servers.</p>
</details>

---

## 📂 Universal Modular Folder Map
This system is highly flexible and can be adapted to any naming convention based on an audience's specific professional or personal setup needs:
* 📥 <b><code>&lt;FOLDER_TRANSIT&gt;</code></b> &mdash; The central entrance gate (the script's sole patrol coordinate).
* 🖼️ <b><code>&lt;FOLDER_MEDIA_ARCHIVE&gt;</code></b> &mdash; Vault for tracking images, activity documentation, and videos.
* 📊 <b><code>&lt;FOLDER_DATA_ANALYSIS&gt;</code></b> &mdash; Landing zone for database files, research, or public data analysis.
* 🎓 <b><code>&lt;FOLDER_CERTIFICATIONS&gt;</code></b> &mdash; Storage for formal credentials, certificates, and achievements.
* 📚 <b><code>&lt;FOLDER_LEARNING&gt;</code></b> &mdash; Course modules, study projects, and logistical tracking logs.
* 🔒 <b><code>&lt;FOLDER_DIGITAL_SECURITY&gt;</code></b> &mdash; Vault for encrypted credentials, VPN profiles, or password manager database files.

---

## 🚀 Key System Features
* 🧹 <b>Auto-Rename & Standardisation:</b> Converted chaotic file naming characters into a clean, database-friendly standard.
* 🛡️ <b>Fail-Safe Mechanism:</b> Files without recognizable extensions or keywords are safely retained in the transit folder to prevent accidental misplacement.
* ☁️ <b>Serverless Execution:</b> Runs completely independently on cloud servers without requiring the user's local hardware (phone or PC) to stay turned on or connected to the internet.
