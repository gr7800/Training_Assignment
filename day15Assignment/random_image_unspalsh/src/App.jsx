import { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './component/SearchForm';
import ImageGrid from './component/ImageGrid';
import { fetchData } from './utils/helper';
import Carousel from './component/Crousel';
import Footer from './component/Footer';
import PaginationModel from './component/PaginationModel';

function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQuerryParams] = useState({
    query: "temple", limit: 1, orientation: "landscape", isRandom: false
  })

  const handleFetchImages = async (value) => {
    const { data, totalpage } = await fetchData({ ...value, page: currentPage });
    setTotalPages(totalpage)
    setImages(data);
  }

  const handleImageSearch = (value) => {
    setQuerryParams(value);
  }

  useEffect(() => {
    handleFetchImages(queryParams)
  }, [queryParams,currentPage])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-4">
      <SearchForm handleSearch={handleImageSearch} />
      {images && images.length > 0 && <div className="px-4">
        <div className="w-full max-h-[70vh]">
          <Carousel images={images} autoSlide={true} />
        </div>
        <ImageGrid images={images} />
        {!queryParams?.isRandom && <PaginationModel currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
      </div>}
      <Footer />
    </div>
  );
}

export default App
