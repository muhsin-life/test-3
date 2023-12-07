import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  SearchIcon,
  User,
  HeartPulse,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { TDoctors } from "./types/types";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LOCATIONS } from "./config";

export const BookNow = ({ doctors }: { doctors: TDoctors[] }) => {
  interface TDoctorSelect {
    doctor: string;
    speciality: string;
  }

  const [selectedDoctor, SetSelectedDoctor] = useState<null | TDoctorSelect>(
    null
  );
  const [specilaityState, setSpecilaity] = useState<null | string>(null);

  const [selectedLocation, setSelectedLocation] = useState<null | string>(null);

  const specilialities = [
    ...new Set(doctors.map((doctor) => unslugify(doctor.acf.speciallity))),
  ];

  function unslugify(slugs: string[]) {
    return slugs.map((slug) => slug.toLowerCase().replace(/-/g, " ")).join(",");
  }

  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-20">
      <MaxWidthWrapper>
        <div className="">
          <h1 className=" text-3xl font-extrabold tracking-tight lg:text-4xl text-primary">
            Book Now
          </h1>
          <div className="bg-gradient-to-r from-rose-100 to-teal-100 p-10 mt-10 rounded-xl flex justify-between gap-x-4 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <div className="grid w-full max-w-sm items-center gap-1.5 relative">
                  <div className="text-muted-foreground  absolute flex flex-col gap-0.5  pl-10 text-left ">
                    <p className="text-xs">Doctor</p>
                    <p className="text-sm -mt-0.5 text-primary font-bold line-clamp-1">
                      {selectedDoctor !== null
                        ? selectedDoctor.doctor
                        : "Select Doctor"}
                    </p>
                  </div>

                  <User className="fill-primary text-primary absolute inset-y-0 z-10 w-5 h-5 my-auto left-0 ml-3" />
                  <Button
                    variant="dropdown"
                    className="h-14 pl-10 pr-9"
                  ></Button>
                  <ChevronDown className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 " align="end">
                <Command>
                  <CommandInput placeholder="Select new role..." />
                  <CommandList>
                    <CommandEmpty>No roles found.</CommandEmpty>
                    <CommandGroup>
                      {doctors.map((doctor) => (
                        <CommandItem
                          onSelect={() => {
                            SetSelectedDoctor({
                              doctor: doctor.title.rendered,
                              speciality: unslugify(doctor.acf.speciallity),
                            });
                          }}
                          className="teamaspace-y-1 flex flex-col items-start px-4 py-2"
                        >
                          <h4 className="text-base font-semibold text-primary">
                            {doctor.title.rendered}
                          </h4>
                          <p className="text-sm text-muted-foreground capitalize font-medium">
                            {unslugify(doctor.acf.speciallity)}
                          </p>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <div className="grid gap-2  max-w-sm  w-full">
              <Select
                defaultValue="billing"
                onValueChange={(e) => {
                  setSpecilaity(e);
                }}
              >
                {/* <div className="text-muted-foreground  absolute flex flex-col gap-0.5  pl-10 text-left ">
                    <p className="text-xs">Doctor</p>
                    <p className="text-sm -mt-0.5 text-primary font-bold line-clamp-1">
                      {selectedDoctor !== null
                        ? selectedDoctor.doctor
                        : "Select Doctor"}
                    </p>
                  </div> */}
                <SelectTrigger id="area" className={"h-14 max-w-sm w-full "}>
                  <div className="gap-1.5 flex">
                    <HeartPulse className="fill-primary text-primary  z-10 w-5 h-5 my-auto flex-shrink-0" />

                    <div className="text-muted-foreground   flex flex-col gap-0.5  text-left ">
                      <p className="text-xs">Specilaity</p>
                      <p className="text-sm -mt-0.5 text-primary font-bold line-clamp-1 capitalize">
                        {specilaityState !== null
                          ? specilaityState
                          : "Select Speciality"}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>

                <SelectContent>
                  {specilialities.map((spec) => (
                    <SelectItem
                      value={spec}
                      className="capitalize text-base font-medium "
                    >
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2  max-w-sm  w-full">
              <Select
                defaultValue="billing"
                onValueChange={(e) => {
                  setSelectedLocation(e);
                }}
              >
                {/* <div className="text-muted-foreground  absolute flex flex-col gap-0.5  pl-10 text-left ">
                    <p className="text-xs">Doctor</p>
                    <p className="text-sm -mt-0.5 text-primary font-bold line-clamp-1">
                      {selectedDoctor !== null
                        ? selectedDoctor.doctor
                        : "Select Doctor"}
                    </p>
                  </div> */}
                <SelectTrigger id="area" className={"h-14 max-w-sm w-full "}>
                  <div className="gap-1.5 flex">
                    <MapPin className=" text-primary  z-10 w-5 h-5 my-auto flex-shrink-0" />

                    <div className="text-muted-foreground   flex flex-col gap-0.5  text-left ">
                      <p className="text-xs">Location</p>
                      <p className="text-sm -mt-0.5 text-primary font-bold line-clamp-1 capitalize">
                        {selectedLocation !== null
                          ? selectedLocation
                          : "Select Location"}
                      </p>
                    </div>
                  </div>
                </SelectTrigger>

                <SelectContent>
                  {LOCATIONS.map((location) => (
                    <SelectItem
                      value={location}
                      className="capitalize text-base py-3  font-medium"
                    >
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <Input
                type="email"
                className="h-12 pt-5 pl-10 placeholder:text-primary placeholder:font-bold pr-10"
                id="email"
                placeholder="Select specilaity"
              />
              <ChevronDown className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
            </div> */}
            {/* <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <span className="text-muted-foreground text-xs absolute top-[7px] pl-10">
                Specilaity
              </span>
              <MapPin className="=text-primary absolute inset-y-0 z-10 w-5 h-5 my-auto left-0 ml-3" />
              <Input
                type="email"
                className="h-12 pt-5 pl-10 placeholder:text-primary placeholder:font-bold pr-10"
                id="email"
                placeholder="Select specilaity"
              />
              <SearchIcon className="text-primary absolute inset-y-0 z-10 w-5 h-5 right-0 my-auto mr-3" />
            </div> */}
            <Button className=" px-10">Book Now</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
