function Lesson({ url }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div class="d-flex justify-content-center margin-top">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      </div>
      <div className='py-md-3 pl-md-5 bd-content' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 118px)' }}>
        <iframe src={url} style={{ width: '800px', height: '100%', border: 'none', position: 'relative', zIndex: 1 }}></iframe>
      </div>
    </div>
  );
}
