import { v4 as uuid } from "uuid";

function useJournal() {
  const addJournal = (journal) => {
    const isJournalPresent = localStorage.getItem("journals");
    let journals;

    if (!!isJournalPresent) {
      journals = [...JSON.parse(isJournalPresent)];
    } else {
      journals = [];
    }
    const fullJournal = {
      id: uuid(),
      journal: journal,
      title: formatDate(new Date()),
    };
    journals.push(fullJournal);
    try {
      localStorage.setItem("journals", JSON.stringify(journals));
    } catch (error) {
      console.log(error, "ADD JOURNAL");
    }
  };

  const isJournalAlreadyDone = () => {
    const formattedDate = formatDate(new Date());
    let res = false;

    const isJournalPresent = JSON.parse(localStorage.getItem("journals"));
    if (!isJournalPresent) {
      res = false;
      return res;
    } else {
      const alreadyAdded = isJournalPresent.find(
        (journal) => journal.title === formattedDate
      );
      if (alreadyAdded) {
        return (res = true);
      } else {
        return (res = false);
      }
    }
  };

  const getJournalHistory = (date, setHistory, setNoData) => {
    const formattedDate = formatDateForHistory(date);
    const journals = JSON.parse(localStorage.getItem("journals"));

    const journal = journals?.find(
      (journal) => journal.title === formattedDate
    );

    if (!journal) {
      setNoData(true);
      setHistory(null);
    } else {
      setNoData(false);
      setHistory(journal);
    }
  };

  // ! Helper Method

  function formatDate(dateString) {
    const dateObject = dateString;
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;

    return formattedDate;
  }

  function formatDateForHistory(dateString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateComponents = dateString.split(" ");
    const day = parseInt(dateComponents[2], 10);
    const monthIndex = months.indexOf(dateComponents[1]);
    const year = parseInt(dateComponents[3], 10);

    const formattedDate = `${day < 10 ? "0" : ""}${day}/${
      monthIndex < 9 ? "0" : ""
    }${monthIndex + 1}/${year}`;

    return formattedDate;
  }

  return { addJournal, isJournalAlreadyDone, getJournalHistory };
}

export default useJournal;
