// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil
//  olanda daxil olduğu saata uyğun ona mesaj çıxarsın


let date = new Date()

let clock = date.getHours

if (clock >= 0 && clock < 6) {
    mesaj = "Geceniz xeyre qalsin"
} else if (clock >= 6 && clock < 12) {
    mesaj = "Sabahiniz xeyir"
} else if (clock >= 12 && clock < 18) {
    mesaj = "Gunortaniz xeyir"
} else (clock >= 18 && clock < 0)
{ mesaj = "Axsaminiz xeyir" }


console.log(mesaj)



// 2.Object Destructing istifadə edərək employee  obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla)
//  məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.



const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
        email: "farid.ali@example.com",
        phone: "555-1234",
        emergencyContact: {
            names: "Far For",
            relation: "Spouse"
        }
    }
};

let { name, department, contact: { email } } = employee

console.log(`name: "${name}", department: "${department}", email: "${email}"`);

let { contact: { phone }, contact: { emergencyContact: { names } }, contact: { emergencyContact: { relation } } } = employee

console.log(`phone: "${phone}", names: "${names}", relation: "${relation}"`)




// 3.


const apiResponse = [
    {
        id: 1,
        title: "JavaScript əsasları",
        author: "Səid Məmmədov",
        stats: [2500, 150, 30]
    },
    {
        id: 2,
        title: "Array Destructuring",
        author: "Leyla Əliyeva",
        stats: [1800, 220, 45]
    },
    {
        id: 3,
        title: "Müasir JavaScript",
        author: "Tural Həsənli",
        stats: [3200, 380, 70]
    }
];

    //  1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın

let [,{id, title, author, stats }] = apiResponse

console.log(`title: ${title}, author: ${author}, stats: ${stats}`)


    //   2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)

    const statss = [1800, 220, 45];

  
    let [View, Like, Comment] = stats;
    
    console.log(`View:${View}, Like:${Like}, Comment:${Comment}`)
    
    

//     3. Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"


const [, { titles, authors, stats: [views, likes, comments] }] = apiResponse;


const statssss = [1800, 220, 45];

  


console.log(`title: ${title}, author: ${author}, stats: Views: ${views}, Likes: ${likes}, Comments: ${comments}`);


    

// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin
// function renderUserProfile(userData) 



function renderUserProfile(userData) {
    return {
      username: userData?.user?.username ?? "Qonaq",
      avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
      bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
      email: userData?.user?.contact?.email ?? "təyin edilməyib",
      premium: userData?.user?.account?.premium ?? false
    };
  }

 
  
        //   1. Optional chaining ilə təhlükəsiz şəkildə userData-dan məlumatları əldə edin
        //   2. Nullish coalescing ilə əksik məlumatlar üçün default dəyərlər təyin edin
 
        //      Nəticə olaraq bu məlumatları qaytarın:
        //      İstifadəçi adı (default: "Qonaq")
        //      Profil şəkli URL (default: "/default-avatar.png")
        //      Bio məlumatı (default: "Məlumat yoxdur")
        //      Əlaqə emaili (default: "təyin edilməyib")
        //      Premium statusu (default: false)
 
  console.log(renderUserProfile({
    user: {
      username: "tahir2023",
      profile: {
        avatar: "/users/tahir.jpg",
        bio: "JavaScript developer",
      },
      contact: {
        email: "tahir@example.com"
      },
      account: {
        premium: true
      }
    }
  }));
  
 
  
  console.log(renderUserProfile({
    user: {
      username: "aynur",
      profile: {
        bio: ""
      },
      contact: {}
    }
  }));
  

  
  console.log(renderUserProfile({
    user: {
      username: null
    }
  }));
  

  
  console.log(renderUserProfile({}));
  

  