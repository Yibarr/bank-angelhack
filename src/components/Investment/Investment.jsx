import React, { Component } from 'react'

export class Investment extends Component {



    render() {
        return (
        <div>

            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="#">Angel Bank</a>
                    </div>
                </nav>
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src="const.jpg" width="300" alt=""/>
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">HV Construcción</h1>
                            <p>Empresa Mexicana con 25 años de experiencia en la construcción. Desarrollamos proyectos de vivienda en todo el país y buscamos inversión para poder financiar más de un proyecto a la vez.</p>
                            <p>Inversión Solicitada: $50,000,000.00</p>
                            <p>Inversión al momento: $19,500,000.00</p>
                        </div>
                    </div>
                            <div class="card-body" background-color = "#008000">
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
  Tipo A
</button>
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tipos de Inversión</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="row">
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h8 class="card-title">$100,000.00</h8>
                                    <p class="card-text">Plazo: 6 meses / Rendimiento anual: 7.5%.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary btn-sm">Invertir</a>
                                </div>
                            </div>
                        </div>  
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h8 class="card-title">$500,000.00</h8>
                                    <p class="card-text">Plazo: 12 meses / Rendimiento anual: 11%.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary btn-sm">Invertir</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h8 class="card-title">$900,000.00</h8>
                                    <p class="card-text">Plazo: 18 meses / Rendimiento anual: 14.5%.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary btn-sm">Invertir</a>
                                </div>
                            </div>
                        </div>   
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div>
<img class="img-fluid rounded mb-4 mb-lg-0" src="AB.png" width="50" alt=""/>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Angel Assistant
</button>

</div>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">¿Porqué invertir en las empresas tipo A?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Las empresas con clasificación Tipo A son empresas de poco riesgo debido a su tiempo en el mercado, su industria y su historial. Sus rendimientos no son tan altos porque su crecimiento dificilmente es exponencial. Si tu portafolio de imversión es de tipo reservado esta es tu opción, pero si eres más arriesgado te conviene conocer las otras clasificaciones. ¿Te interesa conocer información acerca de otros tipos de riesgo?
      </div>
      <pre><div class="”video-responsive”">
      <iframe src="https://www.youtube.com/embed/dmDplRtwz2E" frameborder="0" allowfullscreen="allowfullscreen">></iframe>
</div>
</pre>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
        </div>
        )
    }
    
}

export default Investment
