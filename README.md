Design API endpoints
1. Admin Responsibilities:
   - Add new grocery items to the system
   - View existing grocery items
   - Remove grocery items from the system
   - Update details (e.g., name, price) of existing grocery items
   - Manage inventory levels of grocery items
2. User Responsibilities:
   - View the list of available grocery items
   - Ability to book multiple grocery items in a single order
  

to do
we can use user tables based on JWT token
can check who updated the inventory recent


3.91.176.74:5000/apirt1/admin/getinventory get api
access-key = fe73fa1282a3aa6c1dc5124dd458362c50fbf1f3 (in headers)

3.91.176.74:5000/apirt1/admin/insertinventory post api
{
   "invtry": [{
        "invtry_name":"Horlics",
        "invtry_price":"5"
    }
    ,{
        "invtry_name":"BOOST",
        "invtry_price":"10"
    }
    ]
}

3.91.176.74:5000/apirt1/admin/updateinventory put api
{
    "invtry_id":"1",
    "invtry_price":"50"
}

3.91.176.74:5000/apirt1/admin/deleteinventory delete api
{
    "invtry_id":"1"
}

3.91.176.74:5000/apirt1/user/getinventory get api

3.91.176.74:5000/apirt1/user/orderinventory post api
{
    "order":[{
        "invtry_id": 3
    },
    {
        "invtry_id": 2
    }
    ]
}
