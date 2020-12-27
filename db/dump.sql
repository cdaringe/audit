--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: node_todo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.node_todo (
    id integer NOT NULL,
    summary character varying NOT NULL,
    full_text text,
    assigned_user_id integer DEFAULT 1 NOT NULL,
    assigned_group_id integer DEFAULT 1 NOT NULL,
    is_complete boolean DEFAULT false,
    parent_id integer,
    is_virtual boolean,
    CONSTRAINT cannot_have_self_parent CHECK ((id <> parent_id))
);


--
-- Name: node_todo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.node_todo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: node_todo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.node_todo_id_seq OWNED BY public.node_todo.id;


--
-- Name: node_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.node_types (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL
);


--
-- Name: node_types_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.node_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: node_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.node_types_id_seq OWNED BY public.node_types.id;


--
-- Name: nodes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.nodes (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    node_type integer
);


--
-- Name: nodes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.nodes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: nodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.nodes_id_seq OWNED BY public.nodes.id;


--
-- Name: node_todo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_todo ALTER COLUMN id SET DEFAULT nextval('public.node_todo_id_seq'::regclass);


--
-- Name: node_types id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_types ALTER COLUMN id SET DEFAULT nextval('public.node_types_id_seq'::regclass);


--
-- Name: nodes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes ALTER COLUMN id SET DEFAULT nextval('public.nodes_id_seq'::regclass);


--
-- Data for Name: node_todo; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.node_todo (id, summary, full_text, assigned_user_id, assigned_group_id, is_complete, parent_id, is_virtual) FROM stdin;
7	do the lords work	somebody's gotta do it	1	1	\N	\N	t
1	buy groceries weee	ya dude	1	1	t	7	\N
5	feed children	not a parent, but i'd imagine it's rather important	1	1	t	7	\N
2	take out trash	it totally stinks, yuck!! no seriously, it's gross	1	1	f	7	\N
3	balance that budget	who knows how much money we even have	1	1	f	7	\N
4	cure cancer	the world needs some goodness	1	1	t	7	\N
6	add diary entry	some seriously juicy stuff has been happening	1	1	t	7	\N
\.


--
-- Data for Name: node_types; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.node_types (id, created_at, name) FROM stdin;
1	2020-12-21 20:51:46.57568+00	todo
\.


--
-- Data for Name: nodes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.nodes (id, created_at, node_type) FROM stdin;
1	2020-12-21 20:52:04.423105+00	1
3	2020-12-21 20:52:13.997902+00	1
\.


--
-- Name: node_todo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.node_todo_id_seq', 7, true);


--
-- Name: node_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.node_types_id_seq', 1, true);


--
-- Name: nodes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.nodes_id_seq', 3, true);


--
-- Name: node_todo node_todo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_todo
    ADD CONSTRAINT node_todo_pkey PRIMARY KEY (id);


--
-- Name: node_types node_types_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_types
    ADD CONSTRAINT node_types_name_key UNIQUE (name);


--
-- Name: node_types node_types_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.node_types
    ADD CONSTRAINT node_types_pkey PRIMARY KEY (id);


--
-- Name: nodes nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_pkey PRIMARY KEY (id);


--
-- Name: nodes nodes_node_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_node_type_fkey FOREIGN KEY (node_type) REFERENCES public.node_types(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

