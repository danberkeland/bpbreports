import swal from '@sweetalert/with-react'

const handleDatabaseError = (info, error) => {
    console.log(`error on fetching ${info} List`, error);
    swal({
      title: "Database Error",
      content: (
        <div>
          <p>The database has loaded incorrectly - Please try refreshing the browser.</p>
          <p>If the problem persists, or it is an emergency, please Text Dan at (661) 210-8811.</p>
          <p>Hopefully he's not asleep!</p>
        </div>
      ),
      icon: "warning",
    });
}

export default handleDatabaseError