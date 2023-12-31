import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const Tab = ({ label, isActive, onClick }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const TabContent = ({ content }) => (
  <div className="tab-content">
    {content.map((item, index) => (
      <div key={index} className="group-item">
        <div className="group-icon">👥</div>
        <div className="group-details">
          <div className="group-info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="group-button-right">
          <button className="green-button">Default Call</button>
        </div>
      </div>
    ))}
  </div>
);



const ListView = ({ items }) => (
  <div className="list-view">
    {items.map((item, index) => (
      <div key={index} className="list-item">
        <img src={item.image} alt={`Image ${index + 1}`} />
      </div>
    ))}
  </div>
);

const AppBar = () => (
  <div className="app-bar">
    <h1 className="app-title">Directory</h1>
    <div className="search-bar">
      <button className="search-icon">🔍</button>
    </div>
  </div>
);

const TopTabNavigation = ({ tabs, listItems }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="top-tab-navigation">
      <div className="left-list">
        <ListView items={listItems} />
      </div>
      <div className="right-content">
        <button className="top-right-button">SOS</button>
        <AppBar />
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isActive={activeTabIndex === index}
              onClick={() => setActiveTabIndex(index)}
            />
          ))}
        </div>
        <TabContent content={tabs[activeTabIndex].content} />
      </div>
    </div>
  );
};

const App = () => {
  const tabs = [
    { label: 'Groups',  content: [
      { title: 'Sample group name', description: 'Description of Group 1' },
      { title: 'Sample group name', description: 'Description of Group 2' },
      { title: 'Sample group name', description: 'Description of Group 3' },
    ]},
    { label: 'Aliases', content: [
      { title: 'Sample group name', description: 'Description of Group 1' },
      { title: 'Sample group name', description: 'Description of Group 2' },
      { title: 'Sample group name', description: 'Description of Group 3' },
    ] },
    { label: 'Users', content: [
      { title: 'Sample group name', description: 'Description of Group 1' },
      { title: 'Sample group name', description: 'Description of Group 2' },
      { title: 'Sample group name', description: 'Description of Group 3' },
    ] },
    { label: 'Recent', content: [
      { title: 'Sample group name', description: 'Description of Group 1' },
      { title: 'Sample group name', description: 'Description of Group 2' },
      { title: 'Sample group name', description: 'Description of Group 3' },
    ] },
  ];

  const listItems = [
    { image: 'image1.png' },
    { image: 'image2.png' },
    { image: 'image3.png' },
    { image: 'image4.png' },
    { image: 'image5.png' },
    { image: 'image6.png' },
    { image: 'image7.png' },
  ];

  return (
    <div className="app">
      <TopTabNavigation tabs={tabs} listItems={listItems} />
    </div>
  );
};

export default App;
