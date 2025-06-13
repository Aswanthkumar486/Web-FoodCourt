 
export default function Menu({ data }) {
  // Loading state
  if (!data || !data.items || !Array.isArray(data.items)) {
    return (
      <section id="menu" className="py-5">
        <div className="container text-center py-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading delicious menu items...</p>
        </div>
      </section>  
    );
  }

  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold">{data.title}</h2>
          <p className="lead fs-4 text-muted">Discover our culinary specialties</p>
        </div>

        <div className="row g-4">
          {data.items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="food-card card h-100 border-0 shadow-lg overflow-hidden">
                <div
                  className="card-img-top"
                  style={{
                    height: '250px',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>

                <div className="card-body p-4">
                  <h3 className="card-title h2 mb-3">{item.name}</h3>
                  <p className="card-text text-muted mb-4">{item.description}</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <span className="badge bg-warning text-dark">Popular</span>
                      <span className="badge bg-info">New</span>
                    </div>
                    <button className="btn btn-outline-danger" disabled>
                      ₹{item.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
