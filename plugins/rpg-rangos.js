global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "𔗚", level: 0 },
      { name: "𔗚 𔗚", level: 3 },
      { name: "𔗚 𔗚 𔗚", level: 4 },
      { name: "𔗙", level: 5 },
      { name: "𔗙 𔗙", level: 6 }, 
      { name: "𔗙 𔗙 𔗙", level: 7 }, 
      { name: "𔗘", level: 8 }, 
      { name: "𔗘 𔗘", level: 9 }, 
      { name: "𔗘 𔗘 𔗘", level: 10 }, 
      { name: "𔓕", level: 11 }, 
      { name: "𔓕 𔓕", level: 12 }, 
      { name: "𔓕 𔓕 𔓕", level: 13 }, 
      { name: "✦", level: 14 },
      { name: "✦ ✦", level: 15 }, 
      { name: "✦ ✦ ✦", level: 16 }, 
      { name: "𔘓", level: 17 }, 
      { name: "𔘓 𔘓", level: 18 }, 
      { name: "𔘓 𔘓 𔘓", level: 19 }, 
      { name: "𔒝", level: 20 }, 
      { name: "𔒝 𔒝", level: 21 }, 
      { name: "𔒝 𔒝 𔒝", level: 22 }, 
      { name: "✯", level: 23 }, 
      { name: "✯ ✯", level: 25 }, 
      { name: "✯ ✯ ✯", level: 27 }, 
      { name: "👑", level: 30 }, 
      { name: "👑 👑", level: 38 }, 
      { name: "👑 👑 👑", level: 50 }, 
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
