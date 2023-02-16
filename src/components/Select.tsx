import Trash from "./Trash";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange?: (value: SelectOption | undefined) => void;
};

const Select = ({ options }: SelectProps) => {
  return (
    <>
      <div className="flex">
        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
          type="button"
        >
          <Trash />
        </button>
        <div
          id="dropdown-states"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="states-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div className="inline-flex items-center">X</div>
              </button>
            </li>
          </ul>
        </div>
        <label htmlFor="states" className="sr-only">
          Choose a state
        </label>
        <select
          id="states"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100  border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700"
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
