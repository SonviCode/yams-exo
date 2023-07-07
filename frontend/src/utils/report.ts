export const handleDate = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour:"numeric",
      minute:'numeric',
      second:'numeric',
    });
  
    return formattedDate;
  };