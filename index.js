const axios = require("axios");

const urlList = "https://movil.sinapsis.com.pe/api/v1/get_messages_by_node/100";
const urlUpdate = "https://movil.sinapsis.com.pe/api/v1/update-messages";

const init=async()=>{
    try {
        const response = await axios.get(urlList)
        console.log("1",response.data.messages);
        for await (const item of response.data.messages) {
            const response1 = await axios.post(urlUpdate,{status:1,idMessage:item.idMessage});
            console.log(response1.data,item.idMessage);
        } 
        const response2 = await axios.get(urlList)
        console.log("2",response2.data.messages);
    } catch (error) {
        console.log(error);
    }
}

init();