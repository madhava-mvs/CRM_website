import { BsThreeDotsVertical } from "react-icons/bs";
import "./Leadcampaignlist.css";

export default function Leadcampaignlist({ array_leadcampaignlist }) {
  //   const handlechange = (e, index) => {
  //     for (let i of array_campaign) {
  //       if (i.id === Number(e)) {
  //         console.log(JSON.stringify(array_leadcampaignlist[index]));
  //         console.log("inside i==>"+JSON.stringify(i));
  //         array_leadcampaignlist[index].campaignid = i.id
  //         array_leadcampaignlist[index].txtCampaignName = i.txtCampaignName
  //         console.log("after change==> "+ JSON.stringify(array_leadcampaignlist))
  //       }
  //     }
  //   };
  return (
    <>
      <div className="lc_list_main">
        <div className="lc_list_title">
          <label>Campaign List</label>
          <BsThreeDotsVertical />
        </div>
        {array_leadcampaignlist.map((item, index) => {
          return (
            <>
              <div className="lc_list_singlerow" key={item.id}>
                <label>{item.txtCampaignName}</label>
                <label>{item.txtConversionType}</label>

                {/* <label>campaign{index + 1}:</label>
                <select
                  value={item.campaignid}
                  onChange={(e) => handlechange(e.target.value, index)}
                  className="form_rectangle_select"
                >
                  <option value="">--Select--</option>
                  {array_campaign.map((itm, index) => {
                    return (
                      <>
                        <option key="{itm.id}" value={itm.id}>
                          {itm.txtCampaignName}
                        </option>
                      </>
                    );
                  })}
                </select> */}
              </div>
            </>
          );
        })}

        {/* {array_leadcampaignlist.map((item, index) => {
          return (
            <div className="lc_list_singlerow">
              <div className="lc_list_singlerow_name_and_icon">
                {<label>campaign{index+1}:</label>}
                {<label>{item.txtCampaignName}</label>}
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
}
