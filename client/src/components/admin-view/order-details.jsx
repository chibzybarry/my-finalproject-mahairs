import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useToast } from "../ui/use-toast";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "@/store/admin/order-slice";

const initialFormData = {
  Status: "",
}

function AdminOrderDetailsView({ orderDetails }) {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  console.log(orderDetails, "orderDetailsorderDetails");

  function handleUpdateStatus(event) {
    event.preventDefault();
    const { status } = formData;

    dispatch(
      updateOrderStatus({ id: orderDetails?._id, orderStatus: status })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getOrderDetailsForAdmin(orderDetails?._id));
        dispatch(getAllOrdersForAdmin());
        setFormData(initialFormData);
        toast({
          title: data?.payload?.message,

        });
      }
    });
  }
  return (
    <DialogContent className="sm:max-w-[600px]">
      <div ckassName="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">order ID</p>
            <Label>123456</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">order Date</p>
            <Label>27/12/2025</Label>
          </div>
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">order Price</p>
            <Label>$500</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">order Status</p>
            <Label>In Process</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Product One</span>
                <span>$100</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
        <div className="grid gap-2">
        <div className="font-medium">Shipping Info</div>
        <div className="grid gap-0.5 text-muted-foreground">
          <span>Ada mageret</span>
          <span>Address</span>
          <span>city</span>
          <span>pinCode</span>
          <span>Phone</span>
          <span>notes</span>
        </div>
        </div>
      </div>
      <div>
        <CommonForm
        formControls={[
          {
            label: "Order Status",
            name: "Status", 
            componentType: "select",
            options: [
              { id: "pending", label: "Pending" },
              { id: "inProcess", label: "In Process" },
              { id: "inShipping", label: "In Shipping" },
              { id: "delivered", label: "Delivered" },
              { id: "rejected", label: "Rejected" },
            ],
          },
        ]}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Update Order Status"}
        onSubmit={handleUpdateStatus}
        />
      </div>
      </div>
      
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
