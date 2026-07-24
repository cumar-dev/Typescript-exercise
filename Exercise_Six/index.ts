enum userRole {
  Admin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: userRole): boolean {
  if (role === userRole.Viewer) {
    return false;
  } else {
    console.log(role);
    return true;
  }
}

console.log(canEdit(userRole.Viewer));    
console.log(canEdit(userRole.Admin));     
console.log(canEdit(userRole.Moderator));  


const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true;