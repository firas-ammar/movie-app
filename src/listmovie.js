import React, { Component } from 'react';
import Movi from './movie';
import { Container, Row, Col } from 'reactstrap';
import { wrap } from 'module';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";
import StarRatingComponent from 'react-star-rating-component';
import Demo from './carousel';



const Moviecard = ({ x }) => {
    return (
        
        <Container>

            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-around' }}>
                {x.map(el => <Movi key={el.id} element={el}/>)}
            </div>
            <section className="text-center my-5">
              <MDBRow>
                <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                  <MDBCard wide ecommerce>
                    <MDBCardImage
                      cascade 
                      src="https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"
                      top
                      alt="sample photo"
                    />
                    <MDBCardBody cascade className="text-center">
                      <a href="#!" className="text-muted">
                        <h5>Genre</h5>
                      </a>
                      <MDBCardTitle>
                        <strong>
                          <a href="#!"></a>
                        </strong>
                      </MDBCardTitle>
                      <MDBCardText>
                <Demo/>
                      </MDBCardText>
                      <MDBCardFooter className="px-1">
                        <span className="float-left font-weight-bold">
                          <strong></strong>
                        </span>
                        <span className="float-right">
                        <StarRatingComponent 
                  name="rate2" 
                  editing={false}
                  starCount={5}
                  value="0"
                />
                        </span>
                      </MDBCardFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
        </Container>

    )
}
export default Moviecard;