
{
    idproduct: "",
    cant:,
    status,
    created:
    update:
    type:"inventario o registrado"
 }
 var salesSchema = new mongoose.Schema
({
    idproduct: "Vehiculos",
    cant: 20,
    status,
    created:
    update:
    type:"inventario o registrado"


      }
})

cant: { type: String,  lowercase: true },
    phone: { type: String, dropDups: true }, 
    password: String,
    document: {  type: Number, required: true, index: true },
    status: { type: Boolean,  default: false },
    created_at : { type : Date , default : Date.now() },
    addres:{ 
       street: { type: String, uppercase: true },
       kra: String,
       number_house: String
  