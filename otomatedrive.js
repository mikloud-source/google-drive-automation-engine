/**
 * Google Drive Layered-Filtering Automation Engine
 * Version: 2.0 (Universal Architecture)
 * Platform: Google Apps Script (GAS)
 */

function OtomatisDrive() {
  // 1. UNIVERSAL KEYWORD MAPPING DICTIONARY
  // Modify these keywords and target folder names according to your own setup.
  var folderMapping = {
    "certificate": "FOLDER_CERTIFICATIONS",
    "sertifikat": "FOLDER_CERTIFICATIONS",
    "cert": "FOLDER_CERTIFICATIONS",
    
    "analysis": "FOLDER_DATA_ANALYSIS",
    "analisis": "FOLDER_DATA_ANALYSIS",
    "data": "FOLDER_DATA_ANALYSIS",
    
    "course": "FOLDER_LEARNING",
    "learning": "FOLDER_LEARNING",
    "project": "FOLDER_LEARNING",
    "study": "FOLDER_LEARNING",
    
    "security": "FOLDER_DIGITAL_SECURITY",
    "keepass": "FOLDER_DIGITAL_SECURITY",
    "kdbx": "FOLDER_DIGITAL_SECURITY",
    "vpn": "FOLDER_DIGITAL_SECURITY",
    "wireguard": "FOLDER_DIGITAL_SECURITY",
    
    "finance": "FOLDER_FINANCIAL_LOGS",
    "keuangan": "FOLDER_FINANCIAL_LOGS",
    
    "portfolio": "FOLDER_PORTFOLIO_CV",
    "cv": "FOLDER_PORTFOLIO_CV",
    "resume": "FOLDER_PORTFOLIO_CV"
  };

  // 2. EXTENSION SIEVE DEFINITIONS
  var mediaExtensions = [".jpg", ".jpeg", ".png", ".heic", ".gif", ".mp4", ".mkv", ".mov"];
  var docExtensions = [".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".csv"];

  try {
    // Single Point of Entry Target
    var transitFolders = DriveApp.getFoldersByName("FOLDER_TRANSIT");
    if (!transitFolders.hasNext()) {
      Logger.log("Error: 'FOLDER_TRANSIT' not found. Please create the entry folder.");
      return;
    }
    
    var transit = transitFolders.next();
    var filesIterator = transit.getFiles();
    
    var queue = [];
    while (filesIterator.hasNext()) {
      queue.push(filesIterator.next());
    }
    
    // Dynamic Timestamp Generator (_yyyy_MM_dd)
    var dateStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "_yyyy_MM_dd");

    for (var i = 0; i < queue.length; i++) {
      var file = queue[i];
      var oldName = file.getName();
      
      var dot = oldName.lastIndexOf(".");
      var name = dot !== -1 ? oldName.substring(0, dot) : oldName;
      var ext = dot !== -1 ? oldName.substring(dot).toLowerCase() : "";
      
      // Standardize file name by replacing spaces and hyphens with underscores
      var clean = name.replace(/[\s-]+/g, "_");
      if (!/_\d{4}_\d{2}_\d{2}$/.test(clean)) { 
        clean += dateStr; 
      }
      var newName = clean + ext;
      
      if (oldName !== newName) { 
        file.setName(newName); 
      }
      
      var lowerName = newName.toLowerCase();
      var isMoved = false;
      
      // LAYER 1: Substring Keyword Filtering
      for (var key in folderMapping) {
        if (lowerName.indexOf(key) !== -1) {
          var targetFolders = DriveApp.getFoldersByName(folderMapping[key]);
          if (targetFolders.hasNext()) {
            file.moveTo(targetFolders.next());
            Logger.log("Layer 1 Sieve Success: " + newName + " -> " + folderMapping[key]);
            isMoved = true;
          }
          break;
        }
      }
      
      // LAYER 2: Multimedia File Sieve -> FOLDER_MEDIA_ARCHIVE
      if (!isMoved && mediaExtensions.indexOf(ext) !== -1) {
        var mediaFolders = DriveApp.getFoldersByName("FOLDER_MEDIA_ARCHIVE");
        if (mediaFolders.hasNext()) {
          file.moveTo(mediaFolders.next());
          Logger.log("Layer 2 Sieve Success: " + newName + " -> FOLDER_MEDIA_ARCHIVE");
          isMoved = true;
        } else {
          Logger.log("Warning: 'FOLDER_MEDIA_ARCHIVE' not found.");
        }
      }
      
      // LAYER 3: General Document Sieve -> FOLDER_DATA_ANALYSIS
      if (!isMoved && docExtensions.indexOf(ext) !== -1) {
        var docFolders = DriveApp.getFoldersByName("FOLDER_DATA_ANALYSIS");
        if (docFolders.hasNext()) {
          file.moveTo(docFolders.next());
          Logger.log("Layer 3 Sieve Success: " + newName + " -> FOLDER_DATA_ANALYSIS");
          isMoved = true;
        } else {
          Logger.log("Warning: 'FOLDER_DATA_ANALYSIS' not found.");
        }
      }
      
      // FAIL-SAFE: Retain file in transit if no criteria matched
      if (!isMoved) {
        Logger.log("FAIL-SAFE TRIGGERED: File retained in transit -> " + newName);
      }
    }
    
    Logger.log("Automation process completed successfully.");

  } catch(err) { 
    Logger.log("System Error: " + err.message); 
  }
}
