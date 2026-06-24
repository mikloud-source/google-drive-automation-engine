import re
from datetime import datetime

def simulate_file_sanitizer(original_filename):
    """
    Phase 1 Prototyping: Simulated File Name Sanitization & Timestamp Injection.
    Developed and validated locally before deployment onto the Google Apps Script Cloud Engine.
    """
    # Separating the filename and its extension
    if '.' in original_filename:
        name_part, extension_part = original_filename.rsplit('.', 1)
        extension_part = f".{extension_part.lower()}"
    else:
        name_part = original_filename
        extension_part = ""

    # 1. SANITIZATION LOGIC: Convert irregular spaces and hyphens into standard underscores (_)
    clean_name = re.sub(r'[\s-]+', '_', name_part)

    # 2. TIMESTAMP LOGIC: Prevent duplicate timestamps if format (_yyyy_MM_dd) already exists
    date_pattern = r'_\d{4}_\d{2}_\d{2}$'
    if not re.search(date_pattern, clean_name):
        current_date_str = datetime.now().strftime("_%Y_%m_%d")
        clean_name += current_date_str

    # Recombine into a standardized, system-friendly filename
    final_sanitized_name = clean_name + extension_part
    return final_sanitized_name

# --- SIMULATION AND TESTING AREA (BEHAVIOR VALIDATION) ---
if __name__ == "__main__":
    # Randomized, anonymized sample files dropped into <FOLDER_TRANSIT>
    sample_files = [
        "annual corporate financial report - final draft.pdf",
        "media asset archive marketing campaign.png",
        "secure cloud network connection gateway.ovpn",
        "encrypted_password_vault_backup_2026_06_25.kdbx" # Already contains a timestamp, should not be duplicated
    ]

    print("=== FILENAME SANITIZATION & STANDARDISATION SIMULATION ===")
    for index, file_name in enumerate(sample_files, 1):
        sanitized = simulate_file_sanitizer(file_name)
        print(f"\n[File #{index}]")
        print(f"Input  : {file_name}")
        print(f"Output : {sanitized}")
