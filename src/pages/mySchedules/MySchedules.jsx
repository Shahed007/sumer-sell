import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Animation from "../../components/animation/Animation";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import MyPending from "./MyPending";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

const MySchedules = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [getUser, setUser] = useState(false);
  const [getRating, setRating] = useState(0);
  const [serviceInfo, setServiceInfo] = useState("");
  const [success, setSuccess] = useState(false);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const url = `/cart?user_email=${user.email}`;
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["cart"],
    enabled: getUser,
    queryFn: async () => {
      try {
        const res = await axios.get(url);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    // refetch();
    if (user.email) {
      setUser(true);
    }
  }, [user]);

  if (isLoading)
    return (
      <div className="h-screen w-full">
        <Animation></Animation>
      </div>
    );

  const openRating = (name) => {
    setServiceInfo(name);
    document.getElementById("my_modal_1").showModal();
  };

  const handleRating = async (e) => {
    e.preventDefault();

    const form = e.target;
    const feedback = form.feedback.value;

    const rating = {
      serviceInfo,
      feedback,
      email: user?.email,
      rating: getRating,
    };
  };

  return (
    <>
      <section className="mt-[65px]">
        <PageHeader>My Schedule</PageHeader>
        <Container>
          <div className="mt-32">
            <div className="mb-12">
              <Title>My Bookings</Title>
            </div>
            {data?.length === 0 ? (
              <div className="flex justify-center items-center text-center">
                <h1 className="text-2xl font-bold dark:text-white">
                  You have no Bookings
                </h1>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead className="text-lg font-bold text-text_color_normal dark:text-text_color_dark">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item) => (
                      <tr
                        key={item._id}
                        className="text-text_color_normal dark:text-text_color_dark"
                      >
                        <td>
                          <img
                            className="h-14 w-14 object-cover"
                            src={item.service_image}
                            alt=""
                          />
                        </td>
                        <td>{item.service_name}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        <td>{item?.status ? item?.status : "Pending"}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => openRating(item?.service_name)}
                          >
                            Give Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <MyPending refetch={refetch}></MyPending>
        </Container>
      </section>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className={`${success ? "mb-3 text-green-400 block" : "hidden"}`}>
            Thanks for feedback
          </p>
          <h3 className="font-bold text-lg">Rating Us</h3>
          <form onSubmit={handleRating}>
            <div className="flex items-center gap-5">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              <span>{getRating}</span>
            </div>
            <div className="mt-5">
              <textarea
                name="feedback"
                id=""
                cols="30"
                rows="10"
                placeholder="feedback"
                className="w-full border border-gray-500 p-2"
              ></textarea>
            </div>

            <button className="btn btn-primary btn-block mt-5" type="submit">
              Save
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MySchedules;
