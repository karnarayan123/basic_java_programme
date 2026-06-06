// 1998-06-08
function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  // 1. Based on years (2026-1998) = 28
  let age = today.getFullYear() - birthDate.getFullYear();

  // 2. Month difference (6 - 6) = 0
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // 3. Birthday yet to come 
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ) {
    age--;
  }
  return age;
}
console.log(calculateAge("2000-02-19"));
console.log(calculateAge("2000-06-04"));
