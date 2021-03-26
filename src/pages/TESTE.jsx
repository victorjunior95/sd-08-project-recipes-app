import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/teste.css';

function teste() {
  return (
    <div className="div_Carousel">

      <Carousel>
        <Carousel.Item>
          <div className="div_Item">
            <img width={ 200 } height={ 200 } alt="200x200" src="https://cdn.pixabay.com/photo/2014/12/15/17/16/boardwalk-569314__340.jpg" />
            <img width={ 200 } height={ 200 } alt="200x200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRMbd3v9F4lS37U03VHDfG6P04MC2T65cAw&usqp=CAU" />
          </div>

          <Carousel.Caption>
            <h3>se for necessário</h3>
            <p>caso seja necessário labels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="I">
            <img width={ 200 } height={ 200 } alt="200x200" src="https://cdn.pixabay.com/photo/2014/12/15/17/16/boardwalk-569314__340.jpg" />
            <img width={ 200 } height={ 200 } alt="200x200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRMbd3v9F4lS37U03VHDfG6P04MC2T65cAw&usqp=CAU" />
          </div>
          <Carousel.Caption>
            <h3>se for necessário</h3>
            <p>caso seja necessário labels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div div className="I">
            <img width={ 200 } height={ 200 } alt="200x200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRMbd3v9F4lS37U03VHDfG6P04MC2T65cAw&usqp=CAU" />
            <img width={ 200 } height={ 200 } alt="200x200" src="https://cdn.pixabay.com/photo/2014/12/15/17/16/boardwalk-569314__340.jpg" />
          </div>
          <Carousel.Caption>
            <h3>se for necessário</h3>
            <p>caso seja necessário labels.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ;
    </div>

  );
}

export default teste;
