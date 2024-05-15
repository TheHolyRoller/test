

export async function handler(event){

    var response = {

        statusCode: 404, 
        boyd: JSON.stringify({

            Error: "No routes", 


        }),


    };
    

    if(event.path == '/api/getproduct'){

        response = {

            statusCode: 200, 
            body: JSON.stringify({

                ProductName: "shoes", 
                Price: "100",


            }),


        }



    }

return response; 


}