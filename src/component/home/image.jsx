import './image.css';

export default function Image() {
  return (
    <div className="image-wrapper">
    <div className="image-container">
      <img src="https://i.pinimg.com/originals/e5/c8/03/e5c803a1f390a8bfb5f45abd8a055ba5.jpg" alt="desc"  />
      <div className='image-text'>
        <div className='icon'>
            <i class ="fa solid fa-plus"></i> 
        </div>
        <div>
        <h6>Join 1000+ users</h6>
        <h6>Achieve your learning goals</h6>
        </div>
    </div>
    </div>
    
    </div>
  );
}