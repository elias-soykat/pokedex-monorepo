import useAppDispatch from "@/hooks/use-app-dispatch";
import useAppSelector from "@/hooks/use-app-selector";
import { fetchPokemons } from "@/store/pokemon/thunk";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  CircularProgress,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { getPokemonImage, parsePokemonId } from "@repo/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export default function IndexPage() {
  const { items, page, limit, hasNext, isLoading, total } = useAppSelector(
    (state) => state.pokemon,
  );

  useEffect(() => {
    if (!items) {
      dispatch(fetchPokemons({ page, limit }));
    }
  }, []);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const isSM = useMediaQuery("(min-width:640px)");

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: isSM ? 120 : 50,
      renderCell(params) {
        return <span className="pl-1">{params.id}</span>;
      },
    },
    {
      field: "imgSrc",
      headerName: "Image",
      width: isSM ? 90 : 75,
      renderCell(params) {
        return (
          <Image
            alt={params.row.name}
            className="w-4/12 mt-3"
            height={20}
            src={params.value}
            width={20}
          />
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      width: 50,
      renderCell(params) {
        return <span className="capitalize font-bold">{params.value}</span>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell(params) {
        return (
          <IconButton
            onClick={() => {
              router.push(`/pokemon/${params.id}`);
            }}
          >
            <RemoveRedEyeIcon />
          </IconButton>
        );
      },
    },
  ];

  const rows = useMemo(() => {
    return (
      items?.map((item, idx) => {
        const id = parsePokemonId(item.url);
        return id
          ? { id, name: item.name, imgSrc: getPokemonImage(id) }
          : { id: idx, name: item.name, imgSrc: null };
      }) ?? []
    );
  }, [items]);

  const onPagination = ({
    pageSize,
    page: _page,
  }: {
    pageSize: number;
    page: number;
  }) => {
    dispatch(fetchPokemons({ page: _page + 1, limit: pageSize }));
  };

  return (
    <div className="flex-1 sm:p-4">
      <div className="w-full flex items-center mb-5 mt-3">
        {isLoading ? (
          <CircularProgress style={{ marginRight: "20px" }} size={30} />
        ) : null}
        <Typography variant="h6">{total} Pokemons In Total</Typography>
      </div>
      <div className="h-[632px]">
        <DataGrid
          columns={columns}
          loading={isLoading}
          onPaginationModelChange={onPagination}
          pageSizeOptions={[10]}
          pagination
          paginationMeta={{
            hasNextPage: hasNext,
          }}
          paginationMode="server"
          paginationModel={{
            page: page - 1,
            pageSize: limit,
          }}
          rowCount={total}
          rows={rows}
        />
      </div>
    </div>
  );
}

