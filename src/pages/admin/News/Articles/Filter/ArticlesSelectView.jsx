import React from "react";

export const ArticlesSelectView = () => <div className="listed__bar">
  <div className="listed__dropDown admin__listed">
    <div className="basicDropDown__wrapper">
      <select className="basicDropDown__input" defaultValue="CryptoBriefing">
        <option value="CryptoBriefing">CryptoBriefing</option>
        <option value="Resource">Resource</option>
        <option value="Bitcoin.ru">Bitcoin.ru</option>
      </select>
    </div>
  </div>
</div>