import styles from "../styles/Home.module.css";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Button } from "@material-ui/core";

export default function Home() {
  const [itemName, setItemName] = React.useState("");
  const [itemAmount, setItemAmount] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleNumChange = (e) => {
    setItemAmount(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  async function handleAddClick() {
    var data = {
      name: itemName,
      amount: itemAmount,
    };
    console.log(data);

    await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  async function handleSearchButton() {
    await fetch(`/api/items/${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data === undefined || data.length == 0) {
          alert("This item does not exist in your database!");
        } else {
          alert(`You have ${data[0].amount} ${data[0].name}`);
        }
      });
  }

  return (
    <div className={styles.container}>
      <h1>SQL Tester</h1>
      <Link href="/items">
        <a>Click to see all items</a>
      </Link>
      <form>
        <TextField
          id="name"
          label="Item Name"
          onChange={(e) => handleNameChange(e)}
        />
        <TextField
          id="amount"
          label="Item Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleNumChange(e)}
        />
        <Link href="/items">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddClick()}
          >
            Add New Item
          </Button>
        </Link>
      </form>
      <form>
        <TextField
          id="search"
          label="Search For Item"
          onChange={(e) => {
            handleSearchChange(e);
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSearchButton()}
        >
          Search Item
        </Button>
      </form>
    </div>
  );
}
