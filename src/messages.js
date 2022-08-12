import { dbConnect } from "./dbConnect.js";

export function receivedMessage (req, res) {  
    const db = dbConnect ();
    db.collection("messages").get() 
        .then(collection => {
            const messages = collection.docs.map(doc => doc.data());
            res.send(messages);
        }) 
        .catch(err => handleError(err, res))
 }


export function postMessage(req, res) {
  const db = dbConnect();
  const newMessage = req.body;
  
  db.collection("messages").add(newMessage)
  .then(doc => {
    res.status(201).send({
        success: true,
        id: doc.id
    })
  })
  .catch(err => handleError(err, res))
}

function handleError(err, res) {
    console.error(err)
    res.status(500).send(err)
}
