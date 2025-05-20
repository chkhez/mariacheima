class User {
  constructor (nom, prenom, date_naiss, email, password, username, numero_tel) {
    this.nom = nom
    this.prenom = prenom
    this.date_naiss = date_naiss
    this.email = email
    this.password = password
    this.username = username
    this.numero_tel = numero_tel
  }
  //1. checkNom and checkPrenom
  checkNom () {
    if (this.nom.length < 3 || this.nom.length > 30) {
      return false
    } else {
      //check if contains characters or numbers
      list_char = '/[0-9]/' || '/W/'
      if (this.nom.match(list_char)) {
        return false
      } else {
        return true
      }
    }
  }
  checkPrenom () {
    if (this.nom.length < 3 || this.nom.length > 30) {
      return false
    } else {
      //check if contains characters or numbers
      list_char = '/[0-9]/' || '/W/'
      if (this.nom.match(list_char)) {
        return false
      } else {
        return true
      }
    }
  }

  //App name = HealSafe, Hygix, SafeIn, HySafe, Cliny, Epilya(2 syllabus +  vowel and vowel)
  //You Heal, We Protect
  //2. CheckEmail
  checkEmail () {
    //check if contains @ and ends with epilya.dz and contains nom.prenom and contains no chars like &
    if (
      this.email.includes('@') &&
      this.email.endsWith('.epilya.dz') &&
      this.email.includes('.')
    ) {
      //check if it doesn't contain special characters
      list_char = '/[!#$%^&*()_+={}[]:;"\'<>?,]/'
      for (let i; i < list_char.length; i++) {
        if (this.email.match(list_char[i])) {
          return false
        } else {
          return true
        }
      }
    } else {
      return false
    }
  }

  //CheckPassword
  checkPassword () {
    //contains at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    //pour renforcer le hashage
    if (
      this.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      return true
    } else {
      return false
    }
  }

  //checkYearBirth
  checkYearBirth(){
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(this.date_naiss).getFullYear();
    if (birthYear<=1900 || birthYear>currentYear || currentYear-birthYear>=130){
        return false
  }
    else{
        return true
    }
  }

  checkUsername () {
    list_char = '/[!#$%^&*()-+={}[]:;"\'<>?,]/'
      for (let i; i < list_char.length; i++) {
        if (this.email.match(list_char[i])) {
          return false
        } else {
          if (this.username.includes(this.nom) && this.username.includes(this.prenom)) {
            return false
          }else {
            return true
        }
        }
      }
  }

  //create RandomUsername that includes nom and prenom and last two digits of year of birth
  createRandomUsername(){
    const lastTwoDigits = this.date_naiss.slice(-2)
    const randomUsername = Math.random() < 0.5 ? this.nom + lastTwoDigits : this.prenom + lastTwoDigits;
    return randomUsername;
  }

}

export default User;