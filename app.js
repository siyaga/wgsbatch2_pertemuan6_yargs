0
// Memanggil Yargs
const yargs = require("yargs");

// Membuat Yargs 
yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        //membuat isi array deksripsinya
        // Membuat nama
        name: {
            describe:'Contact name',
            demandOption:true,
            type:'string',
        },
        // membuat email
        email:{
            describe:'Contacct Email',
            demandOption:false,
            type:'string',
        },
        // membuat Mobile
        mobile:{
            describe:'Contact Mobile phone number',
            demandOption:true,
            type:'string',
        },

    },
    //Memanggil yargs
    handler(argv){
        //membuat array contact yang akan di isi oleh isi yargs tadi di atas
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile,
        };
        //Menampilkan array yang sudah di inputkan
        console.log(contact);
    },
});
// Menjalankan yargs utama
yargs.parse();














// const { questions,saveIsiData } = require('./contact') ;
// const main = async() => {
//     // menambahkan beberapa pertanyaan
//     const name = await questions('What is your name : ');
//     const mobile = await questions('What is your mobile number : ');
//     const email = await questions('What is your email : ');
    

//     saveIsiData(name,mobile,email);
    
 
// };
// main();