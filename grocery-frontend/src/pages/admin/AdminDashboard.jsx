function AdminDashboard() {
  return (

    <div style={{ padding: "30px" }}>

      <h1>🛒 Admin Dashboard</h1>

      <hr />

      <h3>Welcome Admin</h3>

      <br />

      <button>Add Product</button>

      <button style={{marginLeft:"20px"}}>
        Manage Products
      </button>

      <button style={{marginLeft:"20px"}}>
        Manage Categories
      </button>

      <br /><br />

      <button>
        View Orders
      </button>

      <button style={{marginLeft:"20px"}}>
        View Customers
      </button>

      <button style={{marginLeft:"20px"}}>
        Assign Delivery Partner
      </button>

    </div>

  );
}

export default AdminDashboard;