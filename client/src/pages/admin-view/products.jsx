import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ProductImageUpload from "@/components/admin-view/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "@/store/admin/products-slice";



const initialFormData = {
  image: null,
  title:'',
  description:'',
  price:'',
  category:'',
  salePrice:'',
  brand:'',
  totalStock:'',
};

function Products() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);

    const[formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [UploadedImageUrl, setUploadedImageUrl] = useState(' ');
    const [imageLoadingState, setImageLoadingState] = useState(false)
    const {productList} = useSelector (state=>state.adminProducts)
    const dispatch = useDispatch()

    
      function onSubmit(event){
        event.preventDefault();

      }  

      useEffect(()=>{
        dispatch(fetchAllProduct());
      },[dispatch]);


    console.log(productList,UploadedImageUrl, "productList");
    
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
            <ProductImageUpload
             imageFile={imageFile} 
             setImageFile={setImageFile}
              uploadedImageUrl ={UploadedImageUrl}
               setUploadedImageUrl={setUploadedImageUrl}
               setImageLoadingState={setImageLoadingState}
               imageLoadingState= {imageLoadingState}
                />
          <div className="py-6">
            <CommonForm
            onSubmit={onSubmit} 
            formData={formData} setFormData={setFormData} buttonText="Add"
            formControls={addProductFormElements}/>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Products;
