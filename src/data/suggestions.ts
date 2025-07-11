export const suggestionKeywords = {
  'asuransi': [
    'asuransi kesehatan',
    'asuransi jiwa',
    'asuransi kebakaran',
    'asuransi kendaraan',
    'asuransi kredit',
    'bancassurance',
    'premi asuransi',
    'klaim asuransi'
  ],
  'kredit': [
    'kredit UMKM',
    'kredit kendaraan',
    'kredit rumah',
    'KPR',
    'kredit modal kerja',
    'kredit investasi',
    'suku bunga kredit',
    'jaminan kredit'
  ],
  'tabungan': [
    'tabungan haji',
    'tabungan berjangka',
    'tabungan anak',
    'tabungan valas',
    'suku bunga tabungan',
    'setoran awal tabungan'
  ],
  'deposito': [
    'deposito berjangka',
    'deposito valas',
    'suku bunga deposito',
    'tenor deposito',
    'pencairan deposito',
    'perpanjangan deposito'
  ],
  'transfer': [
    'transfer antar bank',
    'transfer online',
    'transfer RTGS',
    'transfer SKNBI',
    'BI-Fast',
    'biaya transfer',
    'limit transfer'
  ],
  'atm': [
    'kartu ATM',
    'ganti kartu ATM',
    'blokir kartu ATM',
    'limit ATM',
    'ATM error',
    'maintenance ATM'
  ],
  'brimo': [
    'aktivasi BRImo',
    'registrasi BRImo',
    'fitur BRImo',
    'limit BRImo',
    'reset PIN BRImo',
    'update BRImo'
  ],
  'pembayaran': [
    'pembayaran listrik',
    'pembayaran PDAM',
    'pembayaran pajak',
    'pembayaran BPJS',
    'pembayaran telepon',
    'pembayaran internet'
  ],
  'keluhan': [
    'keluhan nasabah',
    'pengaduan',
    'komplain',
    'customer service',
    'eskalasi keluhan',
    'penanganan keluhan'
  ],
  'compliance': [
    'transaksi mencurigakan',
    'anti money laundering',
    'know your customer',
    'pelaporan compliance',
    'audit compliance'
  ]
};

export const getAllSuggestions = (): string[] => {
  return Object.values(suggestionKeywords).flat();
};

export const getSuggestions = (input: string): string[] => {
  const lowerInput = input.toLowerCase().trim();
  
  if (lowerInput.length < 2) return [];
  
  const suggestions: string[] = [];
  
  // Check for exact keyword matches
  Object.entries(suggestionKeywords).forEach(([keyword, values]) => {
    if (keyword.includes(lowerInput)) {
      suggestions.push(...values);
    }
  });
  
  // Check for partial matches in suggestion values
  Object.values(suggestionKeywords).flat().forEach(suggestion => {
    if (suggestion.toLowerCase().includes(lowerInput) && !suggestions.includes(suggestion)) {
      suggestions.push(suggestion);
    }
  });
  
  return suggestions.slice(0, 8); // Limit to 8 suggestions
};