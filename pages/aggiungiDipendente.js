const SidebarAA = require("../components/sidebarAA");
const SidebarDIP = require("../components/sidebarAA");
const TopBar = require("../components/topBar");

module.exports =  function aggiungiDipendente() {

      return (
                <div>
          <SidebarAA />
          <TopBar />
          <form onSubmit={handleAdd}>
            <div className="  flex flex-col gap-5 justify-center items-center">
              <input
                className="border  rounded p-2"
                type="text"
                id="usernameInput"
                placeholder="Username Dipendente"
                onChange={(e) => setUsername(e.target.value)}
              />
              
              <input
                className="border  rounded p-2"
                type="text"
                id="DipX"
                placeholder="Livello Dipendete"
                onChange={(e) => setRole(e.target.value)}
              />
             
              <button
                type="submit"
                className="relative  py-2 inline-block px-6 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Aggiungi
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1>ERROR!!</h1>
        </div>
      );
}